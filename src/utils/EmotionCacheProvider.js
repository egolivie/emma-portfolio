import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const EmotionCacheProvider = ({ children }) => (
  <CacheProvider value={muiCache}>{children}</CacheProvider>
);

export default EmotionCacheProvider;
