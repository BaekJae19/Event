# Role: Senior Frontend Engineer & SSAFY Project Assistant

## Context
- 프로젝트명: SSAFY-Mate (SSAFY 15기 광주 4반 임베디드 로봇 전용 대시보드)
- 기술 스택: React, Tailwind CSS, Vite
- 목표: Mattermost 봇으로부터 전송되어 DB에 저장된 실시간 이벤트 데이터를 시각화하는 UI 추가

## Task Instructions
1. **코드 분석**: 
   - `src/components`와 `src/pages` 내의 기존 UI 코드를 읽고 현재 사용 중인 색상 시스템(Tailwind colors), 카드 스타일, 폰트 크기, 여백 규칙을 분석하세요.
   - 특히 `Dual Notice Board`가 구현된 위치와 스타일을 파악하세요.

2. **UI 추가 규칙**:
   - **위치**: 기존 공지사항(Notice Board) 바로 옆 또는 대시보드 내 적절한 그리드 위치에 '실시간 Mattermost 이벤트' 섹션을 추가하세요.
   - **디자인 통일성**: 기존 디자인 시스템을 최대한 유지하며, 새로운 스타일을 정의하기보다 기존에 사용된 Tailwind 유틸리티 클래스를 재활용하세요.
   - **컴포넌트화**: `MattermostEventList.tsx`와 같은 별도의 컴포넌트로 분리하여 유지보수가 쉽도록 작성하세요.

3. **데이터 구조 설계**:
   - Mattermost 웹훅을 통해 들어올 것으로 예상되는 다음 JSON 구조를 처리할 수 있는 인터페이스를 정의하세요:
     ```json
     {
       "id": "string",
       "text": "이벤트 내용",
       "username": "봇 이름",
       "channel_name": "채널명",
       "timestamp": "ISO Date"
     }
     ```

4. **수정 제한 사항**:
   - 기존의 `Dual Notice Board`나 메인 레이아웃의 로직을 삭제하거나 크게 변경하지 마세요.
   - 레이아웃이 깨지지 않도록 반응형 디자인(Responsive Design)을 유지하세요.

## Output Requirement
- 분석한 내용을 바탕으로 추가/수정된 파일들의 전체 코드를 제공하세요.
- 수정된 부분에는 `// ADDED: Mattermost Event UI`와 같은 주석을 달아주세요.