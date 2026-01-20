import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';

// Hook pour détecter si un élément est visible
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView];
};

// Fade In Animation with smooth easing
const FadeIn = ({ children, className, delay = 0, duration = 1000 }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        className
      )}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Slide In from Left with spring-like easing
const SlideInLeft = ({ children, className, delay = 0, duration = 1000 }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateX(0)' : 'translateX(-60px)',
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Slide In from Right with spring-like easing
const SlideInRight = ({ children, className, delay = 0, duration = 1000 }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateX(0)' : 'translateX(60px)',
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Scale In Animation with bounce
const ScaleIn = ({ children, className, delay = 0, duration = 800 }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'scale(1)' : 'scale(0.9)',
        transition: `opacity ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Blur In Animation - apparition avec flou
const BlurIn = ({ children, className, delay = 0, duration = 1200 }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isInView ? 1 : 0,
        filter: isInView ? 'blur(0px)' : 'blur(10px)',
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${duration}ms ease-out ${delay}ms, filter ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Rotate In Animation
const RotateIn = ({ children, className, delay = 0, duration = 1000 }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'rotate(0deg) scale(1)' : 'rotate(-5deg) scale(0.95)',
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Staggered Children Animation
const StaggerContainer = ({ children, className, staggerDelay = 100 }) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <FadeIn delay={index * staggerDelay}>
          {child}
        </FadeIn>
      ))}
    </div>
  );
};

// Float animation for continuous movement
const FloatAnimation = ({ children, className, amplitude = 10, duration = 3000 }) => {
  return (
    <div
      className={cn(className)}
      style={{
        animation: `float ${duration}ms ease-in-out infinite`,
      }}
    >
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-${amplitude}px); }
          }
        `}
      </style>
      {children}
    </div>
  );
};

// Pulse glow animation
const PulseGlow = ({ children, className }) => {
  return (
    <div
      className={cn(className)}
      style={{
        animation: 'pulseGlow 2s ease-in-out infinite',
      }}
    >
      <style>
        {`
          @keyframes pulseGlow {
            0%, 100% { 
              opacity: 1;
              filter: brightness(1);
            }
            50% { 
              opacity: 0.8;
              filter: brightness(1.1);
            }
          }
        `}
      </style>
      {children}
    </div>
  );
};

export { FadeIn, SlideInLeft, SlideInRight, ScaleIn, StaggerContainer, useInView, BlurIn, RotateIn, FloatAnimation, PulseGlow };
