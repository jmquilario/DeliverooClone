import * as React from 'react';

import { FocusAwareStatusBar, SafeAreaView, Text } from '@/ui';

export const Tab2 = () => {
  return (
    <SafeAreaView className="flex-1">
      <FocusAwareStatusBar />

      <Text className="text-base">Tab2 Component</Text>
    </SafeAreaView>
  );
};
