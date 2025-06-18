/* eslint-disable prefer-const */
// src/components/LoginPage/LoginPage.tsx

import React, { useState, useEffect, FormEvent } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Zustand store hooks for auth state
import { useAuthStore, selectIsAuthenticated, selectAuthIsLoading, selectAuthError, initializeAuth } from '../stores/authStore';
import type { LoginPayload } from '../../../core/types/api/auth';

// Icons and placeholder components
import { FiLoader } from 'react-icons/fi';
// import YourLogo from '../../../assets/images/shared/logoblack.svg';

// Styled components from the previous step
import * as S from './LoginPage.styles';
import { useNavigate } from 'react-router-dom';
import { useSettingsStore } from '@/features/settings/stores/settingsStore';

// Define a type for our form's validation errors
interface FormErrors {
  username?: string;
  password?: string;
}

export const LoginForm: React.FC = () => {
  // --- STATE MANAGEMENT ---

  // 1. Form input state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 2. Client-side validation error state
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // 3. Zustand store state selectors for asynchronous operations
  const login = useAuthStore(state => state.login);
    const accessToken = useAuthStore(state => state.accessToken);

  const clearAuthError = useAuthStore(state => state.clearAuthError);
  const isAuthenticated = useAuthStore(selectIsAuthenticated);
  const isLoading = useAuthStore(selectAuthIsLoading);
  const serverError = useAuthStore(selectAuthError); // API errors from the store
  const navigate = useNavigate();
    const setSelectedCountryId = useSettingsStore((state) => state.setSelectedCountryId);

  // --- LOGIC & SIDE EFFECTS ---

  // Initialize AOS (Animate on Scroll/View) library on component mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const handleClear = () => {
    localStorage.clear();          // Clear all localStorage
    sessionStorage.clear(); 
    setSelectedCountryId(null) ;
    alert('Your cart has been cleared')     
    caches.keys().then((names) => { // Optional: clear Cache Storage (PWA)
      for (let name of names) {
        caches.delete(name);
      }
    });
  }
useEffect(() => {
  if (isAuthenticated) {
    navigate('/', { replace: true });
  }
}, [isAuthenticated, navigate]);
  // Clear any existing server errors when the component first loads

  
  // Logic to handle successful login (e.g., redirect to dashboard)
  useEffect(() => {
    if (isAuthenticated) {
       
      // In a real app, you would use your router here:
      // history.push('/dashboard');
      // For this example, we'll just show an alert.
    }
  }, [isAuthenticated]);


  // --- VALIDATION & FORM HANDLING ---

  /**
   * Performs client-side validation on the form fields.
   * @returns A boolean indicating if the form is valid.
   */
  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    // Username (Email) validation
    if (!username) {
      errors.username = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(username)) {
      errors.username = 'Please enter a valid email address.';
    }

    // Password validation
    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.';
    }

    setFormErrors(errors);

    // The form is valid if the errors object is empty
    return Object.keys(errors).length === 0;
  };

  /**
   * Handles the form submission event.
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
   
    e.preventDefault(); // Prevent the default browser form submission
      handleClear();
    // Do not submit if a request is already in progress
    if (isLoading) return;
    
    // Clear previous server errors before a new attempt
    clearAuthError();
   


    // Perform validation
    const isFormValid = validateForm();

    // If the form is not valid, stop the submission process
    if (!isFormValid) {
      return;
    }

    // If validation passes, create the payload and call the login action
    const payload: LoginPayload = { username, password };
    await login(payload);
     
     
     

  };

  /**
   * Clears the validation error for a specific field as the user types.
   */
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    // If there was an error, clear it once the user starts correcting it
    if (formErrors.username) {
      setFormErrors(prevErrors => ({ ...prevErrors, username: undefined }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (formErrors.password) {
      setFormErrors(prevErrors => ({ ...prevErrors, password: undefined }));
    }
  };


  // --- RENDER LOGIC ---

  return (
    <S.PageContainer>
      {/* Left branding panel */}
      <S.Panel variant="visual" data-aos="fade-right">
        <S.LogoContainer>
          {/* <YourLogo color="white" /> */}
        </S.LogoContainer>
        <S.Tagline>The future of hydration is here.</S.Tagline>
      </S.Panel>

      {/* Right form panel */}
      <S.Panel variant="form" data-aos="fade-left">
        <S.FormContainer>
          <div data-aos="fade-up" data-aos-delay="100">
            <S.Title>Welcome Back</S.Title>
            <S.Subtitle>Log in to your LumiVitae account.</S.Subtitle>
          </div>

          <S.StyledForm onSubmit={handleSubmit} noValidate>
            {/* Username Input Field */}
            <S.FormGroup data-aos="fade-up" data-aos-delay="200">
              <S.Label htmlFor="username">Email Address</S.Label>
              <S.InputWrapper>
                <S.StyledInput
                  id="username"
                  type="email"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="e.g., your@email.com"
                  disabled={isLoading}
                  required
                  aria-invalid={!!formErrors.username}
                  aria-describedby="username-error"
                />
                <S.EmailIcon />
              </S.InputWrapper>
              {formErrors.username && <S.InlineError id="username-error">{formErrors.username}</S.InlineError>}
            </S.FormGroup>

            {/* Password Input Field */}
            <S.FormGroup data-aos="fade-up" data-aos-delay="300">
              <S.Label htmlFor="password">Password</S.Label>
              <S.InputWrapper>
                <S.StyledInput
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  disabled={isLoading}
                  required
                  aria-invalid={!!formErrors.password}
                  aria-describedby="password-error"
                />
                <S.LockIcon />
              </S.InputWrapper>
              {formErrors.password && <S.InlineError id="password-error">{formErrors.password}</S.InlineError>}
            </S.FormGroup>
            
            {/* Display Server-Side Errors */}
            {serverError && (
              <S.FormError>
                {serverError.message || 'An unknown error occurred.'}
              </S.FormError>
            )}

            {/* Form Actions: Forgot Password and Submit Button */}
            <S.FormActions data-aos="fade-up" data-aos-delay="400">
              <S.StyledLink href="/forgot-password">Forgot Password?</S.StyledLink>
              <S.Button type="submit" disabled={isLoading}>
                {isLoading ? <FiLoader className="spinner" /> : 'Login'}
              </S.Button>
            </S.FormActions>
          </S.StyledForm>

           <S.LegalLinksContainer>
                <S.LegalLink to="/legals/terms-and-conditions">Terms & Conditions</S.LegalLink>
                <S.LegalLink to="/legals/privacy-policy">Privacy Policy</S.LegalLink>
                <S.LegalLink to="/legals/returns-policy">Returns Policy</S.LegalLink>
                <S.LegalLink to="/legals/shipping-policy">Shipping Policy</S.LegalLink>
                <S.LegalLink to="/legals/warranty-policy">Warranty Policy</S.LegalLink>
                <S.LegalLink to="/legals/partner-agreement">Partner Agreement</S.LegalLink>
            </S.LegalLinksContainer>
        </S.FormContainer>
      </S.Panel>
    </S.PageContainer>
  );
};