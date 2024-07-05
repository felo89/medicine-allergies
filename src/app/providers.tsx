'use client';

import * as React from 'react';
import { SWRConfig } from 'swr';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { NextUIProvider } from '@nextui-org/system';

import { fetcher } from '@/services/fetcher';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const swrOptions = { fetcher };

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <SWRConfig value={swrOptions}>{children}</SWRConfig>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
