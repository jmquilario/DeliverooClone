import * as React from 'react';

import { FocusAwareStatusBar, SafeAreaView, Text } from '@/ui';

export const Tab1 = () => {
  return (
    <SafeAreaView className="flex-1">
      <FocusAwareStatusBar />

      <Text className="text-base">Tab1 Component</Text>
    </SafeAreaView>
  );
};
