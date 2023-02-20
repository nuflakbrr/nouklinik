export const blockAccess = (localItem: string, router: any) => {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(localItem);
    if (item !== item) {
      localStorage.clear();
      router.push('/');
    }
  }
};
