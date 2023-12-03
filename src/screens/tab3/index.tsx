import * as React from 'react';

import { FocusAwareStatusBar, SafeAreaView, Text } from '@/ui';

export const Tab3 = () => {
  return (
    <SafeAreaView className="flex-1">
      <FocusAwareStatusBar />

      <Text className="text-base">Tab3 Component</Text>
    </SafeAreaView>
  );
};
