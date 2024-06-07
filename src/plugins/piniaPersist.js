export default function piniaPersistPlugin(context) {
  const { store } = context;

  // 스토어 초기화 시 로컬 스토리지에서 데이터 로드
  const fromStorage = localStorage.getItem(store.$id);
  if (fromStorage) {
    store.$patch(JSON.parse(fromStorage));
  }

  // 스토어 데이터가 변경될 때마다 로컬 스토리지에 저장
  store.$subscribe((mutation, state) => {
    localStorage.setItem(store.$id, JSON.stringify(state));
  });
}