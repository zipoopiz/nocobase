import React from 'react';
import { useCollectionManager } from './hooks';
import { CollectionOptions } from './types';
import { CollectionContext } from './context';

export const CollectionProvider: React.FC<{ name?: string; collection: CollectionOptions }> = (props) => {
  const { name, collection, children } = props;
  const { get } = useCollectionManager();
  return (
    <CollectionContext.Provider value={collection || get(collection?.name || name)}>
      {children}
    </CollectionContext.Provider>
  );
};
