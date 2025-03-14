# Nuxt3

## 1. 개요

Nuxt3의 프로젝트 구조와 동작 원리를 학습하고 이를 실습 적용해보기 위한 간단한 프론트엔드 학습 프로젝트

## 2. 기술 스택

프론트엔드 학습을 목적으로하는 실습 프로젝트이기 때문에 백엔드 서버는 간단하게 `json-server` 라이브러리와 `Node.js` 엔진으로 단순하게 구축

#### Frontend

<img src="https://img.shields.io/badge/Nuxt3-00DC82?style=flat-square&logo=Nuxt&logoColor=white" />&nbsp;<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />&nbsp;<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white" />

#### Backend

<img src="https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=Node.js&logoColor=white" />&nbsp;<img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat-square&logo=amazonec2&logoColor=white" />&nbsp;<img src="https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white" />

## 3. 아키텍쳐

1. 클라이언트 요청: Vercel 서버에서 가동 중인 Nuxt3가 SSR 방식으로 페이지를 로드함.
2. 데이터 요청: Nuxt3에서 EC2 서버로 데이터를 요청.
3. 웹서버 중간 처리: Nginx 웹서버에서 CORS와 proxy pass 설정을 통해 백그라운드에서 구동 중인 json-server로 요청을 전달.
4. 데이터 응답: Nuxt3 페이지로 처리한 데이터를 응답. 

## 4. 공부 내용 정리

Nuxt3, Vercel 공식 문서와 각종 자료를 바탕으로 학습한 내용을 정리합니다.

- [Nuxt3 State Managment](md/state-man.md)
- [Nuxt3 Universal Rendering]()

