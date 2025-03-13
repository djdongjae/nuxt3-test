# 구현 및 공부 내용 정리

## 1. Nuxt3 State Managment - useState

---
기본적으로 기관 목록의 데이터에 변경이 생기면 화면도 즉시 변경되어야 한다. 이를 위해 기관 목록을 저장하는 `features`를 반응형 상태로 구현해야한다. 

기존 Vue 또는 Nuxt2에서는 다음과 같이 ref 반응형 상태로 구현했었다.

```javascript
const features = ref([]);
```

현재 프로젝트 Nuxt3에서는 다음과 같이 useState를 이용하여 반응형을 구현한다.

```typescript
const features = useState<Feature[]>('features', () => []);
```

다음과 같이 공식문서를 확인해보면 **반응형에 특화되고 SSR 친화적인** 공유 상태를 생성한다는 것을 볼 수 있다.

<p>
 <img src="/assets/img/스크린샷 2025-03-13 111104.png" />
</p>

## 2. Nuxt3 life cycle - useFetch

