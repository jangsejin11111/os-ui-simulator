# 최신 S3·S4 재확인 및 배포 검증

같은 Google Sheets를 다시 읽고 시나리오 4의 10컷과 추가 변경된 시나리오 3의 10컷을 동기화했습니다. I53:I54 병합은 새 XLSX 내보내기에서 확인했고, S4의 [calm]/[delighted] 지시는 대사와 분리했습니다. 전체 45컷 레이아웃 검사 오류 0, 최신 20컷 V.O·실제 화면 대조 통과. 근거: verification/v3/refresh-verification.json. 아래는 이전 전체 반복 검증 기록입니다.

# v03 실제 브라우저 검증

2026-10-04 · 로컬 정적 서버 /preview/ 하위 경로 · Microsoft Edge / Playwright. 최신 수정본은 GitHub Pages 재배포 대상으로 검증했습니다.

| 검증 | 결과 |
|---|---|
| 전체 원문 V.O | 45컷 최신 I열 원문·표시 구간 일치 |
| 반복 | 45컷 각각 2.5주기, 실제 rAF를 가상 시계로 실행 |
| 자동 이동·중복 마운트 | URL 고정, DOM 노드 수·최초 패널 동일 유지 |
| 정지 | 전체 컷 정지 후 시계 고정 |
| 재개·처음부터·엔딩 | 정적 보기 해제 후 재개, 리셋, OS 전환 뒤 다음 주기 첫 상태 복귀 확인 |
| 탐색 | 선택 목록·좌우 버튼·방향키·직접 URL 최신 의미 일치 |
| 이전 링크 | S2-3.5 → 3.2 + 안내 / 4.4 생성 안 함 |
| URL 복사·주석 | 실제 클립보드 읽기로 주소 일치, 주석 표시/숨김 확인 |
| 상태 | 주차 완료/충전 진행, 컨디션, 오전·오후 업무, 예약/요청 누적 확인 |
| 화면 | 1366×768 전체 45컷, 1920×1080 주요 7컷 캡처; 16:9 및 V.O 분리 |
| 화면 카피 | 일괄 대문자 변환 없음, TBD/---/00:00 없음 |
| 최종 레이아웃 검사 | 45컷 잘림 0, 브라우저 실행 오류 0 |

첫 검사에서 S2-5.1의 중복 차량 문구로 하단 카드가 넘치는 것을 발견했습니다. 중복 카피를 제거한 뒤 전체 화면 검사를 다시 통과했습니다. 초기 검사 기록을 덮어쓰지 않고 results.json에 남겼으며 최종 판정은 final-screen-audit.json입니다. 이미지 속 이전 영문 제목도 SVG 클리핑으로 제거했습니다.

검증 자료: verification/v3/results.json, final-screen-audit.json, data-validation.json, cuts/*.png, contact-S1~S4.png. 명세 내보내기: data/production-manifest.json.

재검증 명령: node scripts/verify-v3.cjs → node scripts/audit-v3.cjs → node scripts/export-v3.cjs → node scripts/validate-v3.cjs. Playwright와 Edge가 필요합니다. 가상 시계는 UI 동작 검증용이며 실제 음성 싱크를 입증하지 않습니다.
