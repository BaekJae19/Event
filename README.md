# SSAFY 4반 웹사이트
싸피 15기 광주 4 임베디드 로봇 반 웹 페이지 React와 Vue.js 바이브 코딩 해보기

# 💙 SSAFY-Mate (싸피메이트)

SSAFY 15기 교육생들을 위한 **올인원 정보 대시보드 & 커뮤니티**입니다.
식단, 일정, 공지사항 등 흩어진 정보를 한곳에 모으고, 팀 프로젝트와 학습 공유를 돕습니다.

## 🏗️ Project Architecture
React와 Spring Boot를 기반으로 한 하이브리드 아키텍처를 채택했습니다.
- **Frontend**: React (사용자 UI), Vue.js (맛집 지도 - Micro Frontend)
- **Backend**: Spring Boot (메인 서버), FastAPI (AI/크롤링 보조)
- **Database**: 
  - **MySQL**: 사용자, 게시글, 댓글 등 핵심 데이터
  - **Notion**: 공지사항, 식단표 등 CMS 용도의 데이터

## 🚀 Key Features
1. **SSAFY Life**: 오늘의 식단, D-Day(과제/시험), 캘린더 확인
2. **Dual Notice Board**: 전체 공지(Notion 연동)와 반별 공지(DB 저장) 분리 제공
3. **Dev Space**: CS 지식 공유, 코드 리뷰 게시판
4. **Entertainment**: 미니게임 (Coming Soon)

## 🛠️ Installation & Run
```bash

# Docker 실행 (DB, Backend, Frontend 일괄 실행)
# docker-compose up --build
# SSAFY_15GJ_4SITE