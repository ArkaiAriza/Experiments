import React, { useState } from 'react';

import { PlayButton, Timer } from 'react-soundplayer/components';

// it's just an alias for 'withSoundCloudAudio' but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons';

// audio source
const streamUrl =
  'https://www.listennotes.com/e/p/6b6d65930c5a4f71b254465871fed370/';

// some track meta information
const trackTitle = 'Great song by random artist';

const AWSSoundPlayer = withCustomAudio((props) => {
  const { trackTitle } = props;

  return (
    <div>
      <PlayButton {...props} />
      <h2>{trackTitle}</h2>
      <Timer {...props} />
    </div>
  );
});

const Exp3 = () => {
  return (
    <AWSSoundPlayer
      streamUrl={streamUrl}
      trackTitle={trackTitle}
      preloadType='metadata'
    />
  );
};

export default Exp3;
