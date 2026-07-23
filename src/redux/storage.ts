import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// redux-persist's default storage reaches for `localStorage`, which does not
// exist during SSR. On the server we swap in a no-op store so `persistReducer`
// stays inert until the client rehydrates.
function createNoopStorage() {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
}

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

export default storage;
