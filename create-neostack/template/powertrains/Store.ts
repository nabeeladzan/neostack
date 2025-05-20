// makeStore.ts
import {create} from 'zustand';
import {type Draft, produce} from 'immer';

type StoreCreator<TState, TActions> = (
    set: (fn: (state: Draft<TState>) => void) => void,
    get: () => TState & TActions
) => TState & TActions;

/**
 * Helper to create Zustand store with Immer integration.
 * Usage:
 *  const useStore = makeStore<State, Actions>((set, get) => ({
 *    ...initial state,
 *    ...actions,
 *  }))
 */
export function makeStore<TState, TActions>(
    storeCreator: StoreCreator<TState, TActions>
) {
    return create<TState & TActions>((set, get) =>
        storeCreator(
            (fn) => set((state) => produce(state, fn)),
            get
        )
    );
}
