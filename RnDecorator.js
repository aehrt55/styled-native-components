import React from 'react';

export default function RnDecorator({ RnElements, styled }) {
  return Component => () => (
    <Component RnElements={RnElements} styled={styled} />
  );
}
