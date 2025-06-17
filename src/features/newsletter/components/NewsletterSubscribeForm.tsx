import React, { useState, useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import {
  useNewsletterStore,
  selectNewsletterIsLoading,
  selectNewsletterError,
  selectNewsletterSuccessMessage,
} from '../stores/newsletterStore';
import type { SubscribeNewsletterPayload } from '../../../core/types/api/newsletter';

export const NewsletterSubscribeForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const { subscribe, clearSubscriptionStatus } = useNewsletterStore(state => ({
    subscribe: state.subscribe,
    clearSubscriptionStatus: state.clearSubscriptionStatus,
  }), shallow);

  const isLoading = useNewsletterStore(selectNewsletterIsLoading);
  const error = useNewsletterStore(selectNewsletterError);
  const successMessage = useNewsletterStore(selectNewsletterSuccessMessage);

  useEffect(() => {
    // Clear previous status when component mounts or email input changes,
    // to avoid showing old messages for a new attempt.
    // This could also be called just before `subscribe`.
    clearSubscriptionStatus();
  }, [email, clearSubscriptionStatus]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      alert('Please enter your email address.');
      return;
    }
    // It's good practice to clear previous messages before a new submission attempt
    // if not cleared by useEffect on email change.
    // clearSubscriptionStatus();

    const payload: SubscribeNewsletterPayload = { email: email.trim() };
    const success = await subscribe(payload);

    if (success) {
      // Success message is now in the store and will be displayed by the component.
      setEmail(''); // Clear input on success
    }
    // Error message will also be displayed from the store.
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Subscribe to our Newsletter</h3>
      <div>
        <label htmlFor="newsletterEmail">Email Address:</label>
        <input
          id="newsletterEmail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          disabled={isLoading}
        />
      </div>

      {isLoading && <p>Subscribing...</p>}
      {successMessage && !isLoading && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && !isLoading && (
        <div style={{ color: 'red' }}>
          <p>Subscription failed: {error.message}</p>
          {typeof error.errors === 'object' && error.errors && (
            <ul>
              {Object.entries(error.errors).map(([key, messages]) =>
                Array.isArray(messages) ? messages.map((msg, i) => <li key={`${key}-${i}`}>{key}: {msg}</li>) : null
              )}
            </ul>
          )}
        </div>
      )}

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Subscribe'}
      </button>
    </form>
  );
};
