# OS UI 제작 명세 v03

최신 원본: [전면 스토리보드](https://docs.google.com/spreadsheets/d/1RFT9nO8Lk-dK6t1i6wsmANPwc3p607FG2N3Jmg9gQaQ/edit#gid=446341671)

확인일: 2026-10-04 (KST). 최신 Google Sheets 읽기와 동일 시점 XLSX 내보내기의 셀 문자열을 대조해 일치함을 확인했다. 범위: 시나리오 1–4, 씬 3–5. 총 45컷 (13 / 12 / 10 / 10). 이번 수정은 최신 원문 반영 후 GitHub Pages 배포 대상으로 준비했다.

## 원문과 시연안

I열은 컷별 V.O의 기준이며 J열은 참고 대본으로만 보존한다. rawCellText는 해당 셀의 공백·문장부호를 포함한 원문, sourceText는 검증된 병합 범위 전체, displayText는 표시 대사다. I27:I28 및 최신 I53:I54를 병합 V.O로 확인했다. I53:I54는 두 컷이 원문 전체를 공유 표시한다. I27:I28의 두 컷 표시 구간은 편집 제안이다. I24 빈 셀은 앞 대사로 채우지 않는다. S2-4.2의 (알림음), S4의 [calm]/[delighted]는 별도 지시로 표시하고 원문·위치를 보존한다.

영문 UI·시간·SOC·모션·좌표·속도 수치는 시연용 제안이다. 최신 원문에 대한 승인으로 해석하지 않는다. 실제 화면은 src/render.js + display-demo.json이 구성하며 production-manifest.json과 아래 영역 명세는 브라우저 렌더 결과에서 추출했다. 조건부 A/B 또는 전환 문구는 DOM에 둘 다 있어도 화면에는 해당 단계만 표시한다.

## URL 및 의미 식별자

S2 최신 순서: 3.1 인사 → 3.2 주차·충전 → 3.3 컨디션 → 3.4 업무 브리핑. 기존 3.2 URL 의미는 컨디션에서 주차·충전으로, 기존 3.3은 업무에서 컨디션으로 바뀐다. 사라진 3.5는 3.2로 치환하고 안내한다. 4.3 다음은 4.5이며 4.4를 만들지 않는다. semanticId/rendererKey는 의미를 식별하고 displayOrder는 순서를 관리한다.

S2 중간 URL 접속도 vehicle/condition/briefing/delivery/equipment 상태를 해당 컷의 정적 데이터로 복원한다. 주차 완료·충전 진행, 컨디션 결과를 유지하고 오전 기록 09:00과 오후 검수 14:00을 구분한다. 4.1은 오후 장소만 A → B로 변경한다. 배송은 예약, 장비는 요청이며 배송·착용 완료가 아니다.

## 공통 연출

16:9, 핵심 UI 즉시 표시, 현재 컷 내부 반복, 자동 다음 컷 없음. 일시정지·재개·리셋·보조 탐색·주석 숨김·정적 보기를 제공한다. 원문/V.O/제작노트와 한국어 조작계는 작품 화면 밖에 둔다. 모노톤 이미지와 빨간 UI를 유지하며 text-transform 대문자 변환을 사용하지 않는다. S1 속도 HUD는 기존 주행 프로파일을 공통 시계로 계속 갱신한다.

## 원문 확인 필요

- S2-4.2 / 5.3 존댓말과 다른 컷 반말을 그대로 보존했다.
- S2-4.2 / 4.3 도착 확인 내용 중복을 생략하지 않았다.
- S1 I27:I28 병합은 확인 완료. 컷별 분할 제안의 실제 음성 길이·싱크는 제작 확인 필요.
- S4 L72 승인 완료 체크와 I73 승인 대기 발화는 충돌한다. UI는 검토 대기 → 등록 중 → 승인 조건부 예약이라는 시연용 보류안이다.
- S4 I69 중복 마침표는 최신 원문에서 제거되었다. I72는 “ 거점의”로 시작하며 I열을 그대로 보존한다.

## 컷별 명세

### S1-3.2.1 · 리워드 광장 발견

- 의미 ID: s1:agent_with_two_circles:3.2.1 / 표시 순서 1
- 출처: G19, H19, I19, J19, L19
- 원문 길이: 10초 / 시연 루프 10초

화면 구성 원문:

- BG: 생활권 줌인
- CH: 에이전트가 관객을 향해 인사
>> - CH: 에이전트가 UI에 반응
- 한산한 광장 실루엣 + 리워드 파장 팝업

V.O 표시 (source_text):

방금 오늘만 열리는 리워드 장소를 찾았어요! 아직은 조용하지만, 곧 많은 스마트 시티즌들이 이곳으로 향할 거에요. 함께 가볼까요? 

필요 에셋: - 메타휴먼 B

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 5 / 25 / 37 / 46 | Limited-time reward event / Reward Plaza R-04 / Open 18:00–19:30 / Entry open |
| 2 | 64 / 22 / 30 / 12 | Reward Plaza R-04 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S1-3.2.2 · 차량 도착

- 의미 ID: s1:full_map:3.2.2 / 표시 순서 2
- 출처: G20, H20, I20, J20, L20
- 원문 길이: 5초 / 시연 루프 10초

화면 구성 원문:

- 2D맵 평면뷰
- 시민의 위치로 이동하는 차량 기호

V.O 표시 (source_text):

차량이 도착했어요!

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 5 / 25 / 37 / 46 | Vehicle arrived / Pickup point / P-02 / Ready to board |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S1-3.2.3 · 차량 HUD 전환

- 의미 ID: s1:vehicle_hud:3.2.3 / 표시 순서 3
- 출처: G21, H21, I21, J21, L21
- 원문 길이: 5초 / 시연 루프 10초

화면 구성 원문:

- 도착 후, 차량 HUD 1인칭 시점으로 전환

V.O 표시 (source_text):

이동하는 동안 광장의 현 상황도 함께 확인할게요! 

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 5 / 25 / 37 / 46 | Boarding complete / Destination / Reward Plaza / Distance / 1.2 / km / Autonomous mode |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S1-3.3.1 · 시민·차량 유입 증가

- 의미 ID: s1:vehicle_hud:3.3.1 / 표시 순서 4
- 출처: G22, H22, I22, J22, L22
- 원문 길이: 4초 / 시연 루프 10초

화면 구성 원문:

- 차량 이동 POV, 창밖 점군 데이터 컬러 변화
- 2D 맵에서 다른 시민, EV 노드가 하나씩 늘어난다

V.O 표시 (source_text):

같은 장소로 향하는 시민과 차량이 빠르게 늘고 있어요. 

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 5 / 20 / 33 / 58 | Inbound flow / +37% / vs. previous 15 min / Pedestrians / 128 / EVs / 24 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S1-3.3.2 · 도착·충전 조건 수집

- 의미 ID: s1:vehicle_hud:3.3.2 / 표시 순서 5
- 출처: G23, H23, I23, J23, L23
- 원문 길이: 4초 / 시연 루프 10초

화면 구성 원문:

- 차량 예정 도착 시간, 현재 충전 잔량, 예상 체류 시간 데이터 패킷 정리 그래피

V.O 표시 (source_text):

도착할 때 필요한 전력도 이동하는 동안 맞춰둘게요.

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Destination · Reward Plaza |
| 2 | 4 / 19 / 34 / 36 | Arrival in / 4 / min / 20 / sec / Arrival time / 18:00 / Estimated stay / 90 / min |
| 3 | 4 / 61 / 34 / 30 | Charging plan / Current SOC / 43% / Target SOC / 72% / Departure / 19:30 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S1-4.1.1 · 광장 탑뷰와 게임 레이어

- 의미 ID: s1:plaza_hud:4.1.1 / 표시 순서 6
- 출처: G24, H24, I24, J24, L24
- 원문 길이: 3초 / 시연 루프 10초

화면 구성 원문:

- HUD 레이아웃은 유지
- 광장 라이다 평면뷰 > 카메라 무빙
- 게임 레이어가 열림
- 이후 시민과 EV 노드가 빠르게 모인다.

V.O 표시 (missing_in_source):

원문 미기입

필요 에셋: - 도시 라이다데이터 탑뷰에서 카메라 이동하는 영상들 여러개 BG로 두기

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Plaza energy model |
| 2 | 65 / 20 / 31 / 58 | Plaza energy model / MPU-01 / R-04 / Connected / Energy model online |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 최신 I열 V.O 미기입. 앞 컷 대사를 이어받지 않음.

### S1-4.1.2 · 전력 수요 초과

- 의미 ID: s1:plaza_hud:4.1.2 / 표시 순서 7
- 출처: G25, H25, I25, J25, L25
- 원문 길이: 10초 / 시연 루프 10초

화면 구성 원문:

- 광장 라이다 평면뷰) 광장 내부 에너지 충전 요청 팝업이 연쇄적으로 켜진다.
- 2D) 수요곡선이 평소 공급선을 넘기고 화면이 빨갛게 경고.

V.O 표시 (source_text):

음... 지금 상태로는 광장의 전력 운영과 도착 차량의 충전을 함께 감당하기 어렵겠어요. 

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Capacity exceeded |
| 2 | 64 / 17 / 33 / 73 | Capacity exceeded / Demand / 1.46 / MW / Available / 0.84 / MW / Deficit / 0.62 / MW / Capacity exceeded / Available · 0.84 MW / Demand · 1.46 MW / Power balancing in progress |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S1-4.1.3 · 광장 지원 요청

- 의미 ID: s1:plaza_hud:4.1.3 / 표시 순서 8
- 출처: G26, H26, I26, J26, L26
- 원문 길이: 8초 / 시연 루프 10초

화면 구성 원문:

- 광장 라이다 맵) 탑뷰) 빨간 원형 파장

V.O 표시 (source_text):

마침 광장이 주변의 시민들에게 도움을 요청하고 있네요. 

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Power support request |
| 2 | 65 / 22 / 31 / 61 | Power support request / Required / 620 / kW / Broadcast active / Responses / 03 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S1-4.2.1 · 이동식 충전 설비 도착

- 의미 ID: s1:plaza_hud:4.2.1 / 표시 순서 9
- 출처: G27, H27, I27:I28, J27, L27
- 원문 길이: 4초 / 시연 루프 10초

화면 구성 원문:

- 광장 라이다 맵) 탑뷰) 미래형 고용량 이동식 충전 설비가 광장 가장자리 도착한다
- 바퀴 정지 클로즈업, 커넥터 등 켜지는 과정 클로즈샷

V.O 표시 (proposed_split_of_merged_source):

이동식 충전 설비도 광장으로 들어오고 있어요.

병합 원문 전체:

이동식 충전 설비도 광장으로 들어오고 있어요.

건물 ESS와 V2G 차량의 여유 전력도 확인할게요. 각 차량의 출발 시간에 맞는 전력만 연결하겠습니다.

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Mobile power unit |
| 2 | 65 / 16 / 31 / 75 | Mobile power unit / MPU-01 / MPU-01 / Docked / Connector ready / Available support / 200 / kW |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: I27:I28 병합 V.O 확인. 컷별 표시 구간은 편집 제안이며 원문 전체를 별도 보존.

### S1-4.2.2 · ESS·V2G 연결 후보 검토

- 의미 ID: s1:plaza_hud:4.2.2 / 표시 순서 10
- 출처: G28, H28, I27:I28, J28, L28
- 원문 길이: 5초 / 시연 루프 10초

화면 구성 원문:

- 공급처 (건물 ESS + V2G EV)와 출발 예정 차량들이 서로 연결되는 모습
- 각각 고유한 점군 형상 컬러강조하고, 공금 가능량과 시간, 잔량 등 팝업되고 연결 제안선 (경우의 수들)이 나타남

V.O 표시 (proposed_split_of_merged_source):

건물 ESS와 V2G 차량의 여유 전력도 확인할게요. 각 차량의 출발 시간에 맞는 전력만 연결하겠습니다.

병합 원문 전체:

이동식 충전 설비도 광장으로 들어오고 있어요.

건물 ESS와 V2G 차량의 여유 전력도 확인할게요. 각 차량의 출발 시간에 맞는 전력만 연결하겠습니다.

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Source matching · 03/03 |
| 2 | 7 / 37 / 15 / 5 | ESS · +240 kW |
| 3 | 44 / 37 / 16 / 5 | V2G · +180 kW |
| 4 | 20 / 81 / 21 / 5 | Mobile unit · +200 kW |
| 5 | 62 / 16 / 35 / 76 | Source matching · 03/03 / Building ESS / +240 / kW / V2G pool / +180 / kW / Mobile unit / +200 / kW / Total support / +620 / kW / V2G-07 departure / 19:10 / Minimum departure SOC / 70% |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: I27:I28 병합 V.O 확인. 컷별 표시 구간은 편집 제안이며 원문 전체를 별도 보존.

### S1-4.3.1 · 임시 전력망 구성 완료

- 의미 ID: s1:plaza_hud:4.3.1 / 표시 순서 11
- 출처: G29, H29, I29, J29, L29
- 원문 길이: 5초 / 시연 루프 10초

화면 구성 원문:

- 광장 중심으로 임시 전력망 조성되는 모습, 
- 제안선 사라지고, 실제 전력 경로만 굵고 안정된 선으로 강조

V.O 표시 (source_text):

좋아요. 필요한 전력을 하나로 연결해 임시 전력망 구성을 끝냈어요. 차량마다 출발 시간에 맞춰 충전을 준비할게요!

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Temporary grid · Active |
| 2 | 7 / 37 / 15 / 5 | ESS · +240 kW |
| 3 | 44 / 37 / 16 / 5 | V2G · +180 kW |
| 4 | 20 / 81 / 21 / 5 | Mobile unit · +200 kW |
| 5 | 64 / 17 / 33 / 73 | Temporary grid · Active / Demand / 1.46 / MW / Connected capacity / 1.46 / MW / Power balanced / Power balanced / Connected capacity · 1.46 MW / Demand · 1.46 MW / Charging schedule / Confirmed |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S1-5.1 · 광장 도착·하차

- 의미 ID: s1:vehicle_hud:5.1 / 표시 순서 12
- 출처: G30, H30, I30, J30, L30
- 원문 길이: 3초 / 시연 루프 10초

화면 구성 원문:

- 어둡고 비어있던 광장 라이다 도로뷰가 활성화되면서, 게임 레이어가 등장한다.
- 시민 하차 표시로 HUD가 바뀐다

V.O 표시 (source_text):

이제 리워드 광장에 도착했어요. 

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 5 / 25 / 37 / 46 | Destination reached / Reward Plaza R-04 / Vehicle stopped / Ready to exit |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S1-5.2 · 차량 충전 관리 인계

- 의미 ID: s1:vehicle_hud:5.2 / 표시 순서 13
- 출처: G31, H31, I31, J31, L31
- 원문 길이: 5초 / 시연 루프 10초

화면 구성 원문:

- 1인칭 차량뷰의 메쉬 오버레이가 꺼지고, 라이다뷰만 남는다.
- 차량의 대리권한 테두리가 켜지고, 충전지점으로 이동한다

V.O 표시 (source_text):

차량 충전은 제가 이어서 관리할게요. 바로 일정을 시작하세요!

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 5 / 25 / 37 / 46 | Control delegated / Next / Charging zone C-03 / Charging schedule / Confirmed / Ready by / 19:30 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S2-3.1 · 인사

- 의미 ID: s2:greeting / 표시 순서 1
- 출처: G36, H36, I36, J36, L36
- 원문 길이: 7초 / 시연 루프 10초

화면 구성 원문:

- 작업미러: 화면 중앙 / 세로 라운드 미러 테두리가 켜지고, 에이전트가 있음.  
- 빈 슬롯: 주변부 / 네 슬롯은 얇은 윤곽만 표시. 

V.O 표시 (source_text):

좋은 아침이야! 

필요 에셋: 공통 미러 프레임 / 메타휴먼 C

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 36 / 4 / 28 / 91 | Work mirror / Agent V · Connected |
| 2 | 3 / 4 / 31 / 36 | 윤곽·그래픽 영역 |
| 3 | 3 / 43 / 31 / 52 | 윤곽·그래픽 영역 |
| 4 | 66 / 4 / 31 / 27 | 윤곽·그래픽 영역 |
| 5 | 66 / 34 / 31 / 61 | 윤곽·그래픽 영역 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S2-3.2 · 주차 완료·충전 진행

- 의미 ID: s2:parking-charging / 표시 순서 2
- 출처: G37, H37, I37, J37, L37
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

- 작업 미러: 인체 점군 숨쉬는 호흡 반복
- 슬롯3: 우측 / 차량 실루엣과 Parking Robot, ACR 아이콘. 주차는 완료 체크, 충전은 진행 표시. 설명 후 슬롯은 작게 유지한다.

V.O 표시 (source_text):

방금 타고 온 차량은 Parking Robot이 주차를 마쳤고, ACR이 충전을 시작했어. 평소 업무가 끝나는 시간에 맞춰 다시 준비해둘게.

필요 에셋: 차량 / 주차로봇 / ACR 아이콘

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 36 / 4 / 28 / 91 | Work mirror / Agent V · Background mode |
| 2 | 3 / 4 / 31 / 36 | 윤곽·그래픽 영역 |
| 3 | 3 / 43 / 31 / 52 | 윤곽·그래픽 영역 |
| 4 | 66 / 4 / 31 / 27 | 윤곽·그래픽 영역 |
| 5 | 66 / 34 / 31 / 61 | Mobility status / Vehicle / EV-12 / Parking Robot / Parking complete / ACR / Charging in progress / SOC / 42% / Ready by / 18:00 / Parking Robot ✓ / ACR ↗ |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S2-3.3 · 컨디션 확인

- 의미 ID: s2:condition-check / 표시 순서 3
- 출처: G38, H38, I38, J38, L38
- 원문 길이: 7초 / 시연 루프 10초

화면 구성 원문:

- 작업미러: 에이전트 out > 인체 점군이 모여지고, 위에서붙 아래로 스캔되는 장면
- 우측 상단: 컨디션 체크 중.. > '조금 피곤해요'가 선택되고 작은 상태 태그가 된다.
==> 시민이 출근해 미러 앞에 선 상황.

V.O 표시 (source_text):

오늘 당신의 컨디션은 어때? 조금 피곤해보이네? 오케이~ 작은 것부터 차근차근 준비를 함께 할게! 

필요 에셋: 인체 점군 루프 / 컨디션 선택 UI / 선택 링

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 36 / 4 / 28 / 91 | Work mirror / Agent V · Background mode |
| 2 | 3 / 4 / 31 / 36 | 윤곽·그래픽 영역 |
| 3 | 3 / 43 / 31 / 52 | 윤곽·그래픽 영역 |
| 4 | 66 / 4 / 31 / 31 | Condition check / Good / As usual / A little tired / Take it easy / Condition saved |
| 5 | 66 / 37 / 31 / 30 | 윤곽·그래픽 영역 |
| 6 | 66 / 70 / 31 / 25 | Mobility status / EV-12 · Parking complete / ACR · Charging in progress 42% / Ready by · 18:00 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S2-3.4 · 오늘의 업무 브리핑

- 의미 ID: s2:daily-briefing / 표시 순서 4
- 출처: G39, H39, I39, J39, L39
- 원문 길이: 10초 / 시연 루프 10초

화면 구성 원문:

- 작업 미러: 인체 점군 숨쉬는 호흡 반복
- 슬롯 1: 좌측 위 / 브리핑 보드 / 오늘의 업무가 펼쳐진다. 오전은 기존 샘플 기록 확인, 오후는 새로운 식물 샘플 검수. 식물 이미지 한 장으로 업무 대상을 먼저 이해시킨다.

V.O 표시 (source_text):

오전에는 샘플 기록을 확인하고, 오후 두 시에는 새로 들어온 식물 샘플을 살펴볼 거야.

필요 에셋: 식물 샘플 스틸 / 오전·오후 카드

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 36 / 4 / 28 / 91 | Work mirror / Agent V · Background mode |
| 2 | 3 / 4 / 31 / 36 | Today’s tasks / 09:00 / Sample records / 14:00 / Plant inspection / Afternoon location / Room A |
| 3 | 3 / 43 / 31 / 52 | Plant sample / Plant sample / PS-014 |
| 4 | 66 / 4 / 31 / 24 | Condition / Take it easy / A little tired · Condition saved |
| 5 | 66 / 37 / 31 / 30 | 윤곽·그래픽 영역 |
| 6 | 66 / 70 / 31 / 25 | Mobility status / EV-12 · Parking complete / ACR · Charging in progress 42% / Ready by · 18:00 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S2-4.1 · A구역 운영 변경·B검수실 전환

- 의미 ID: s2:afternoon-location-change / 표시 순서 5
- 출처: G40, H40, I40, J40, L40
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

- 슬롯2: 작업 구역 지도 A에 옅은 로봇 이동선. '오후 운영 변경' 알림이 뜨고 B가 부드럽게 점등된다. 업무 카드의 장소만 A→B로 바뀐다.

V.O 표시 (source_text):

오후에는 A구역이 자율 로봇 우선 운영 구역으로 바뀐대! 샘플 검수는 바로 옆 B구역에서 그대로 이어갈 수 있게 준비할게.

필요 에셋: 지도 A/B 상태 / 로봇 이동선

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 36 / 4 / 28 / 91 | Work mirror / Agent V · Background mode |
| 2 | 3 / 4 / 31 / 36 | Today’s tasks / 09:00 / Sample records / 14:00 / Plant inspection / Afternoon location / Room A / Afternoon location / Room B |
| 3 | 3 / 43 / 31 / 52 | Afternoon operation update / Room A / Room B / Receiving / Workbench / Room A / Room B / Receiving / Workbench / Room A / Robot priority / Room B / Inspection ready / Afternoon location / Room A → Room B / Schedule / Unchanged |
| 4 | 66 / 4 / 31 / 24 | Condition / Take it easy / A little tired · Condition saved |
| 5 | 66 / 37 / 31 / 30 | 윤곽·그래픽 영역 |
| 6 | 66 / 70 / 31 / 25 | Mobility status / EV-12 · Parking complete / ACR · Charging in progress 42% / Ready by · 18:00 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 오후 검수 장소 A → B 전환; 오전 기록·검수 시각 유지 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S2-4.2 · Spot 샘플 입고 확인

- 의미 ID: s2:sample-received / 표시 순서 6
- 출처: G41, H41, I41, J41, L41
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

- 슬롯 3: 입고 구역의 Spot 아이콘에서 알림이 뜬다. 우측 빈 슬롯에 식물 운반 용기 썸네일과 입고 확인 배지가 들어온다.

V.O 표시 (source_text):

방금 입고 구역을 순찰하던 스팟이 오늘 살펴볼 샘플 용기의 도착을 확인했어요.

효과음·지시: (알림음)

필요 에셋: Spot 공식 이미지 또는 실루엣 / 샘플 용기 스틸

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 36 / 4 / 28 / 91 | Work mirror / Agent V · Background mode |
| 2 | 3 / 4 / 31 / 36 | Today’s tasks / 09:00 / Sample records / 14:00 / Plant inspection / Afternoon location / Room B |
| 3 | 3 / 43 / 31 / 52 | Afternoon workspace / Room A / Room B / Receiving / Workbench / Afternoon location / Room B / Inspection / 14:00 |
| 4 | 66 / 4 / 31 / 24 | Condition / Take it easy / A little tired · Condition saved |
| 5 | 66 / 31 / 31 / 64 | Sample received / Sample arrived / Sample / PS-014 / Location / Receiving / Confirmed by / Spot / EV-12 · Parking complete / ACR · Charging in progress 42% / Ready by · 18:00 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: I열 존댓말과 알림음을 원문대로 보존. 4.3의 도착 확인 대사와 중복되어 제작 확인 필요.

### S2-4.3 · 샘플 배송 예약

- 의미 ID: s2:delivery-booking / 표시 순서 7
- 출처: G42, H42, I42, J42, L42
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

- 슬롯3 아래 샘플 카드가 생기고 아래 DAL-e Delivery 아이콘이 붙는다. 
- 슬롯2: 목적지 B검수실과 예약 시간이 순서대로 나타난다. 이동 애니메이션 대신 점선 경로를 표시.

V.O 표시 (source_text):

방금 입고구역을 순찰하던 Spot이 오늘 살펴볼 샘플 용기의 도착을 확인했어. 검수시간에 맞춰 달리 딜리버리가 도착한 제품을 B검수실로 가져가도록 설정해둘게. 

필요 에셋: DAL-e Delivery 아이콘 / 예약 카드

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 36 / 4 / 28 / 91 | Work mirror / Agent V · Background mode |
| 2 | 3 / 4 / 31 / 36 | Today’s tasks / 09:00 / Sample records / 14:00 / Plant inspection / Afternoon location / Room B |
| 3 | 3 / 43 / 31 / 52 | Afternoon workspace / Room A / Room B / Receiving / Workbench / Afternoon location / Room B / Inspection / 14:00 |
| 4 | 66 / 4 / 31 / 24 | Condition / Take it easy / A little tired · Condition saved |
| 5 | 66 / 31 / 31 / 64 | Delivery scheduled / DAL-e Delivery / Pickup / Receiving / Drop-off / Room B / Inspection / 14:00 / Booking / Confirmed / EV-12 · Parking complete / ACR · Charging in progress 42% / Ready by · 18:00 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 4.2와 샘플 도착 확인 대사가 중복됨. 원문을 임의로 생략하지 않음.

### S2-4.5 · X-ble Waist 준비 제안

- 의미 ID: s2:equipment-proposal / 표시 순서 8
- 출처: G43, H43, I43, J43, L43
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

- 다른 슬롯을 낮추고 미러 옆에 용기→작업대 작은 도해. 인체 허리 부위에 X-ble Waist의 승인된 실루엣을 겹친다. 착용 전 제안 상태.
- 작업미러: 인체점군이 무언가를 들어올리는 애니메이션 루프

V.O 표시 (source_text):

오후에 샘플 케이스를 작업대에 올리는 일이 있어. 평소처럼 허리 부담을 덜어줄 X-ble Waist도 준비해둘까? 

필요 에셋: X-ble Waist 승인 제품 이미지 / 용기·작업대 도해

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 36 / 4 / 28 / 91 | Work mirror / Agent V · Background mode |
| 2 | 3 / 4 / 31 / 36 | Today’s tasks / 09:00 / Sample records / 14:00 / Plant inspection / Afternoon location / Room B |
| 3 | 3 / 43 / 31 / 52 | Afternoon workspace / Room A / Room B / Receiving / Workbench / Afternoon location / Room B / Inspection / 14:00 |
| 4 | 66 / 4 / 31 / 24 | Condition / Take it easy / A little tired · Condition saved |
| 5 | 66 / 31 / 31 / 64 | Lifting support / X-ble Waist / Task / Sample lift / Prepare equipment? / Prepare / Later / Sample case → Workbench / Delivery · Scheduled / EV-12 · Parking complete / ACR · Charging in progress 42% / Ready by · 18:00 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S2-4.6 · 장비 준비 요청 완료

- 의미 ID: s2:equipment-request / 표시 순서 9
- 출처: G44, H44, I44, J44, L44
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

- 슬롯3: 선택 링이 '장비 준비'에 닿고 체크 표시. 장비 실루엣이 제안 점선에서 확정 실선으로 바뀐다. 착용 장면 대신 준비 상태만 표시.

V.O 표시 (source_text):

좋았어. 장비를 요청했어. 작업 전에 착용 상태만 확인하면 돼.

필요 에셋: 확인 체크 / 장비 실루엣 상태 2종

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 36 / 4 / 28 / 91 | Work mirror / Agent V · Background mode |
| 2 | 3 / 4 / 31 / 36 | Today’s tasks / 09:00 / Sample records / 14:00 / Plant inspection / Afternoon location / Room B |
| 3 | 3 / 43 / 31 / 52 | Afternoon workspace / Room A / Room B / Receiving / Workbench / Afternoon location / Room B / Inspection / 14:00 |
| 4 | 66 / 4 / 31 / 24 | Condition / Take it easy / A little tired · Condition saved |
| 5 | 66 / 31 / 31 / 64 | Equipment requested / X-ble Waist / Preparation / Requested / Fitting check / 13:45 / For / 14:00 inspection / Delivery · Scheduled / EV-12 · Parking complete / ACR · Charging in progress 42% / Ready by · 18:00 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 요청 상태 유지; 착용 완료로 전환하지 않음 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S2-5.1 · 업무 준비 상태 정돈

- 의미 ID: s2:workday-ready / 표시 순서 10
- 출처: G45, H45, I45, J45, L45
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

- 화면 전체 슬롯이 가득 참. 오후 예약과 장비 준비 상태가 정돈된다. 
- 차량 슬롯은 주차 완료·충전 중 그대로하고, 전체적으로 톤이 다 밝아짐.

V.O 표시 (source_text):

업무 일정에 맞춰 샘플 배송과 장비 준비까지 연결해뒀어. 이제 오전 일을 시작하면 돼!  

필요 에셋: 공통 레이아웃 / 각 슬롯 최종 상태

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 36 / 4 / 28 / 91 | Work mirror / Agent V · Background mode |
| 2 | 3 / 4 / 31 / 36 | Today’s tasks / 09:00 / Sample records / 14:00 / Plant inspection / Afternoon location / Room B |
| 3 | 3 / 43 / 31 / 52 | Afternoon workspace / Room A / Room B / Receiving / Workbench / Afternoon location / Room B / Inspection / 14:00 |
| 4 | 66 / 4 / 31 / 24 | Condition / Take it easy / A little tired · Condition saved |
| 5 | 66 / 31 / 31 / 64 | Workday coordinated / Afternoon location / Room B / Sample / At receiving / Delivery / Scheduled / Equipment / Requested / EV-12 · Parking complete / ACR · Charging in progress 42% / Ready by · 18:00 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S2-5.2 · 기존 샘플 기록 열기

- 의미 ID: s2:morning-records / 표시 순서 11
- 출처: G46, H46, I46, J46, L46
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

오후 카드는 '예정'으로 접힌다. '기존 샘플 기록 확인'만 앞으로 나오고 식물 기록 썸네일이 열리기 시작한다.

V.O 표시 (source_text):

늘 하던 대로, 샘플 기록부터 확인해 볼까?

필요 에셋: 업무 시작 표시

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 36 / 4 / 28 / 91 | Work mirror / Agent V · Background mode |
| 2 | 3 / 4 / 31 / 36 | Current task / Sample records / Upcoming / 14:00 inspection / Afternoon location / Room B |
| 3 | 3 / 43 / 31 / 52 | Sample records / Record / PS-009 / Type / Leaf sample / Open record |
| 4 | 66 / 4 / 31 / 24 | Condition / Take it easy / A little tired · Condition saved |
| 5 | 66 / 31 / 31 / 64 | Afternoon preparation / Inspection / 14:00 · Room B / Delivery / Scheduled / Equipment / Requested / EV-12 · Parking complete / ACR · Charging in progress 42% / Ready by · 18:00 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S2-5.3 · 업무 시작·OS 마감

- 의미 ID: s2:morning-start / 표시 순서 12
- 출처: G47, H47, I47, J47, L47
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

- 첫 업무가 '시작'으로 전환. 점군이 몸 방향을 미세하게 돌리며 흩어진다. 
- 슬롯은 작아져 사라지고 에이전트 파형이 OS 로고로 정리된다.

V.O 표시 (source_text):

오늘도 당신의 속도로 시작합니다.

필요 에셋: 점군 디졸브 / 에이전트 파형 / OS 로고

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 36 / 4 / 28 / 91 | Work mirror / Agent V · Background mode |
| 2 | 3 / 4 / 31 / 36 | Morning task started / Sample records / Open / Next check / 13:45 / Afternoon / Inspection scheduled |
| 3 | 3 / 43 / 31 / 52 | Afternoon workspace / Room A / Room B / Receiving / Workbench / Afternoon location / Room B / Inspection / 14:00 |
| 4 | 66 / 4 / 31 / 24 | Condition / Take it easy / A little tired · Condition saved |
| 5 | 66 / 31 / 31 / 64 | Morning task started / Delivery / Scheduled / Equipment / Requested / Next check / 13:45 / EV-12 · Parking complete / ACR · Charging in progress 42% / Ready by · 18:00 |
| 6 | 36 / 35 / 28 / 35 | OS / Agent V · Background mode |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 주변 슬롯 축소·점군 약화 후 OS 전환

제작 확인: 다른 S2 컷과 달리 존댓말 원문을 유지.

### S3-3.1 · SHUCLE 도착·하차

- 의미 ID: s3:walking_pov:3.1 / 표시 순서 1
- 출처: G52, H52, I52, J52, L52
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

유럽풍 시내 거리. / 버스정류장에 SHUCLE이 부드럽게 정차.
문이 열리고 시민이 내림. / 화면 한쪽에는 얇은 HUD로 ARRIVED / CITY ACCESS POINT 정도만 뜸.

V.O 표시 (source_text):

셔클이 목적지에서 가까운 정류장에 도착했어. 바로 돌아가기 전에, 잠시 쉬어갈 수 있는 장소로 안내할게.

필요 에셋: 메타휴먼 D

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 10 / 36 / 34 | SHUCLE · Arrived / City access point / C-02 / Next / Common Park P-03 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S3-3.2 · 공용 공원 접근

- 의미 ID: s3:walking_pov:3.2 / 표시 순서 2
- 출처: G53, H53, I53:I54, J53, L53
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

시민 1인칭 시점으로 정류장에서 내려 공원 쪽으로 걸어감.
전방에 광장형 공원이 보이고, 중앙 오픈 스페이스가 드러남.
공원 입구에 다다를수록 POPULAR LAYER: ACTIVITY 같은 작은 안내 배지가 나타남.

V.O 표시 (shared_merged_source):

곳은 방문자들이 자주 머무는 공용 공간이야. 원한다면 이 장소 위에, 여러 버전의 도시 레이어를 열어볼 수 있어.

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 10 / 36 / 34 | Common Park P-03 / Popular layer / Activity / Shared space / Open |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: I53:I54 병합 V.O 확인. 동일 병합 대사를 두 컷에서 공유 표시하며 별도 대사로 확정하지 않음. 최신 I53은 “곳은”으로 시작함. J열의 “이곳은”으로 자동 보충하지 않음.

### S3-3.3 · 실제 공간·레이어 준비

- 의미 ID: s3:walking_pov:3.3 / 표시 순서 3
- 출처: G54, H54, I53:I54, J54, L54
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

시민이 공원 중앙 혹은 메인 포인트에 멈춤.
- 지나가는 보행자 / 서비스 로봇 or 일반 도시 흐름 ( >> 이거 빈 공간이어도 걍 약간 공원 대화소음 같은 거로 처리해도 될듯)

V.O 표시 (shared_merged_source):

곳은 방문자들이 자주 머무는 공용 공간이야. 원한다면 이 장소 위에, 여러 버전의 도시 레이어를 열어볼 수 있어.

필요 에셋: 아직은 완전 평범한 공원.
HUD에는 PHYSICAL SPACE CONFIRMED / LAYER READY.

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 10 / 36 / 34 | Physical space confirmed / Layer ready / Base space / P-03 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: I53:I54 병합 V.O 확인. 동일 병합 대사를 두 컷에서 공유 표시하며 별도 대사로 확정하지 않음. 최신 I53은 “곳은”으로 시작함. J열의 “이곳은”으로 자동 보충하지 않음.

### S3-4.1 · ACTIVITY Layer 활성화

- 의미 ID: s3:park_layers:4.1 / 표시 순서 4
- 출처: G55, H55, I55, J55, L55
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

빈 바닥 위로:- 가상 공연 무대, 스포트라이트, 마이크? 스피커 에셋 등

V.O 표시 (source_text):

이곳 방문자들이 가장 자주 연결하는 건 ACTIVITY Layer야. 공원이 활기찬 이벤트 공간으로 열릴 거야.

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 10 / 36 / 34 | Activity layer · Active / Virtual stage / Connected / Program / Park session |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S3-4.2 · 활동 레이어·조용한 버전 제안

- 의미 ID: s3:park_layers:4.2 / 표시 순서 5
- 출처: G56, H56, I56, J56, L56
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

개인 음향처럼 공연 사운드가 들어오기 시작~
스포트라이트 지점에 퍼포머는 없는데 공연 선택 카드가 팝업되어도 좋을듯?

V.O 표시 (source_text):

음, 조금 활기차긴 하지만… 지금의 당신에게는 다소 분주하게 느껴질 수도 있겠어. 금 더 조용한 버전으로 바꿔볼까? 공원이 쉬어갈 수 있는 버전을 찾아볼게. 

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 65 / 14 / 31 / 48 | Park session / Personal audio / On / Prefer a quieter space? / Switch to Quiet |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 최신 I56의 “금 더” 표기를 그대로 보존.

### S3-4.3 · QUIET Layer 전환

- 의미 ID: s3:park_layers:4.3 / 표시 순서 6
- 출처: G57, H57, I57, J57, L57
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

가상무대 레이어 사라지고, 같은 자리 위에 가상 나무, 화단, 산책길 라인, 잔잔한 햇빛 광선? 바람/새소리 분위기 들어옴

V.O 표시 (source_text):

지금 QUIET Layer로 전환 중이야.

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 10 / 36 / 34 | Layer transition / Activity → Quiet / Physical space / Unchanged |
| 2 | 68 / 8 / 25 / 10 | Activity / Quiet |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S3-4.4 · QUIET 유지·산책

- 의미 ID: s3:park_layers:4.4 / 표시 순서 7
- 출처: G58, H58, I58, J58, L58
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

시민이 산책길을 따라 천천히 몇 걸음 이동하거나, 벤치 근처에서 멈춤.
가상 산책길은 실제 걸을 수 있는 보행로와 겹침.
HUD에는 QUIET ACTIVE.

V.O 표시 (source_text):

어때? 이렇게 하면 조금 더 숨을 고르기 좋지? 잠시 이 분위기대로 머물러볼까?

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 10 / 36 / 34 | Quiet layer · Active / Walking path / Aligned / Rest at your own pace |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S3-5.1 · PBV 휴식 공간 연결

- 의미 ID: s3:park_layers:5.1 / 표시 순서 8
- 출처: G59, H59, I59, J59, L59
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

QUIET Layer가 유지된 상태. 산책길 끝 지점에 PBV REST SPACE AVAILABLE 표시. 멀리 실제 PBV 한 대가 대기 중이거나, 조용히 접근해 정차함. 가상 레이어의 무드와 실제 서비스가 연결되는 느낌을 강조.

V.O 표시 (source_text):

지금의 QUIET Layer에 맞춰, 가까운 PBV를 개인 휴식 라운지로 연결할게. 

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 10 / 36 / 42 | PBV rest space available / PBV-07 / Walk / 120 / m / Private lounge / Available |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S3-5.2 · 휴식·귀가 경로 준비

- 의미 ID: s3:walking_pov:5.2 / 표시 순서 9
- 출처: G60, H60, I60, J60, L60
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

시민이 산책길을 따라 PBV 쪽으로 걸어감.
PBV는 너무 과장된 미래차보다, 실제 존재 가능한 휴식형 모빌리티처럼 보임.
가까이 갈수록 문 주변 UI가 반응:- REST MODE READY
- RETURN ROUTE PREPARED

V.O 표시 (source_text):

산책길 끝에서 바로 이용할 수 있도록 준비해둘게. 

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 10 / 40 / 42 | Rest mode ready / Session / 20 / min / Return route prepared / Home / 7.2 / km / 18 / min |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S3-5.3 · PBV 휴식 후 귀가

- 의미 ID: s3:pbv_interior:5.3 / 표시 순서 10
- 출처: G61, H61, I61, J61, L61
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

시민이 앉으면 내부 UI가 간단히 켜짐.
REST SESSION / RETURN HOME / ROUTE READY
PBV가 귀환 모드로 전환하면서 지도 경로 팝업. pbv 슬며시 출발함

V.O 표시 (source_text):

휴식이 끝나는 시점에 맞춰, 이 PBV가 그대로 귀가 경로로 전환될 거야. 그전까지는 천천히 쉬어가도 좋아.

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 5 / 13 / 37 / 40 | Rest session · Active / 20 min |
| 2 | 5 / 13 / 38 / 53 | Rest session · Complete / Return home / Route ready / 7.2 / km / ETA / 18 / min |
| 3 | 57 / 45 / 36 / 39 | PBV-07 / Home |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S4-3.1 · 오늘 랜드마크 운영 마감

- 의미 ID: s4:operator_console:3.1 / 표시 순서 1
- 출처: G66, H66, I66, J66, L66
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

1인칭 운영자 화면. 영업 종료 직후 랜드마크 내부를 배경으로 운영 콘솔이 켜짐.
주변으로 오늘의 데이터가 순차적으로 정리됨.

V.O 표시 (source_text):

이제 영업을 종료할게요. 오늘의 랜드마크 방문자와 공간 이용 현황을 빠르게 정리해보겠습니다. 

필요 에셋: 메타휴먼 E

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | LM-01 · Operation overview |
| 2 | 4 / 17 / 92 / 32 | Visitors today / 1,284 / New visitors / 38% / Cafe occupancy / 82% / Exhibition engagement / 74% / Average stay / 47 / min |
| 3 | 65 / 54 / 31 / 32 | Service status / Energy / Normal / Mobility / Normal / Service / Normal |
| 4 | 4 / 88 / 80 / 7 | Today's operation complete |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S4-3.2 · 내일 거점 세 곳 제안

- 의미 ID: s4:operator_map:3.2 / 표시 순서 2
- 출처: G67, H67, I67, J67, L67
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

-오늘 리포트가 축소됨
-도시 전체 2D/3D 맵 등장
-현재 랜드마크 위치에서 세 곳 팝업

V.O 표시 (source_text):

운영 데이터를 바탕으로 내일의 거점 후보가 세 곳 제안됐어요. 그대로 머물거나, 새로운 운영 목표에 맞춰 랜드마크를 이동할 수 있습니다.

효과음·지시: [calm]

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Next site options · 03 |
| 2 | 4 / 24 / 92 / 59 | 01 / Transit District / Visitor reach ↑↑ / Revenue ↑ / New citizens ↑ / 02 / Residential District / Exhibition / Cafe / Lounge / Community use ↑↑ / Average stay ↑ / Revenue → / 03 / Culture District / Cultural engagement ↑↑ / Visitor diversity ↑↑ / New program potential ↑ |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S4-3.3 · 문화 생활권 선택·운영 비중 변경

- 의미 ID: s4:operator_map:3.3 / 표시 순서 3
- 출처: G68, H68, I68, J68, L68
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

CULTURE DISTRICT 선택
> 선택 순간 후보지 카드가 확장

V.O 표시 (source_text):

문화 생활권으로 정했군요. 좋아요! 내일은 전시 프로그램의 비중을 높이고, 새로운 시민 유입을 중심으로 운영 목표를 전환할게요. 그럼 지금부터, 랜드마크 이전을 계획합니다.

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Culture District · Selected |
| 2 | 4 / 19 / 58 / 65 | Culture District · Selected / Today's mix / 40 / Cafe / 35 / Exhibition / 25 / Lounge / Tomorrow's mix / 20 / Cafe / 55 / Exhibition / 25 / Lounge |
| 3 | 66 / 26 / 30 / 48 | Culture District / Exhibition / Cafe / Lounge / Site / C-03 |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S4-4.1 · 소형 자산·구조 모듈 분류

- 의미 ID: s4:asset_split:4.1 / 표시 순서 4
- 출처: G69, H69, I69, J69, L69
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

EXHIBITION / CAFE / LOUNGE
세 개의 구조 모듈.그 안에 작은 이동 대상들이 별도 표시됨.
- 전시물/식물/장비/이동형 가구
화면에서 자동으로 두 그룹으로 분류.
SMALL ASSETS → Spot / MobED
STRUCTURAL MODULES→ Heavy Transport Platform

V.O 표시 (source_text):

먼저 이동 대상을 나누어 전시물과 식물, 소형 장비는 구조 모듈보다 먼저 운송시킬게요. 

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Relocation inventory |
| 2 | 61 / 18 / 35 / 70 | Relocation inventory / Small assets / Exhibits / Plants / Equipment / Assigned to / MobED + Spot / Structural modules / Exhibition / Cafe / Lounge / Assigned to / Heavy transport platform |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S4-4.2 · Spot 선행 경로·부지 점검

- 의미 ID: s4:spot_split_view:4.2 / 표시 순서 5
- 출처: G70, H70, I70, J70, L70
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

현재 위치 → 문화 생활권까지 도시 지도.
Spot 노드가 선행 출발.
Spot 1인칭 LiDAR 데이터 컷과 운영 맵을 동시에 보여줌.

V.O 표시 (source_text):

Spot이 이동 경로와 새 운영 부지를 점검할 거에요. 큰 구조 모듈이 이동하기 어려운 구간은 미리 제외할게요.

효과음·지시: [delighted]

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Spot · Route survey planned |
| 2 | 5 / 79 / 55 / 16 | To check / Width / Slope / Surface / Restricted sections / To exclude |
| 3 | 65 / 68 / 31 / 27 | Route survey / Route / LM-01 → C-03 / Distance / 3.8 / km |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S4-4.3 · 자산 운송 순서·로봇 분담

- 의미 ID: s4:robot_dispatch:4.3 / 표시 순서 6
- 출처: G71, H71, I71, J71, L71
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

경로가 확정되면 랜드마크 내부 자산에 이동 순서 번호가 붙음.

V.O 표시 (source_text):

작은 물품은 MobED와 Spot이 나눠 맡고, 구조 모듈은 야간 저속 운송으로 이동합니다.

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Asset dispatch |
| 2 | 3 / 20 / 29 / 68 | Asset queue / 01 / Exhibition asset / 02 / Plants / 03 / Equipment |
| 3 | 69 / 20 / 28 / 68 | Route assignment / MobED / Flat route / Level control / Active / Spot / Steps / Uneven terrain / Structural modules / Overnight low-speed transport |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.

### S4-4.4 · 야간 운송·인프라 계획

- 의미 ID: s4:transport_schedule:4.4 / 표시 순서 7
- 출처: G72, H72, I72, J72, L72
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

[지도 위 세 연결 포인트]
- POWER / WATER / DATA
[작업 타임라인] 
22:30 SMALL ASSET MOVE
→ 23:40 MODULE RELEASE
→ 00:20 TRANSPORT
→ 03:10 RECONNECT
→ 06:00 SYSTEM CHECK
→ 09:00 OPEN

V.O 표시 (source_text):

 거점의 전력과 데이터 연결을 확인하고, 장거리 구간에 HTWO 기반 에너지 지원을 연결할게요. 

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Overnight relocation |
| 2 | 4 / 18 / 40 / 51 | Infrastructure / Power / Connection reserved / Water / Connection reserved / Data / Connection reserved |
| 3 | 55 / 18 / 41 / 51 | City review / Road authority / Review pending / Traffic control / Review pending / HTWO energy support / Scheduled / Move window / 00:20–03:10 |
| 4 | 4 / 74 / 92 / 22 | Today / 22:30 / Small asset move / Today / 23:40 / Module release / Next day / 00:20 / Transport / Next day / 03:10 / Reconnect / Next day / 06:00 / System check / Next day / 09:00 / Open |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: L72 승인 완료 체크와 I73 교통 승인 후 이동 발화 사이 상태 충돌 가능성. UI는 승인 조건부 시연안이며 원문은 그대로 보존. I72는 “ 거점의”로 시작하며 J열의 “새 거점의”와 다름. I열을 보존하고 임의 보충하지 않음.

### S4-4.5 · 이동 계획 정리·운영자 승인 대기

- 의미 ID: s4:approval_summary:4.5 / 표시 순서 8
- 출처: G73, H73, I73, J73, L73
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

복잡했던 모든 후보선이 사라지고 확정된 계획만 남음.
중앙에 깔끔한 하나의 플로우:
PACK
→ ROBOT DELIVERY
→ MODULE TRANSPORT
→ RECONNECT
→ RECONFIGURE
→ OPEN
왼쪽:
RISK : LOW
ROUTE : CONFIRMED
ENERGY : READY
NEW SITE : READY
오른쪽에는 내일 운영 목표:
CULTURAL ENGAGEMENT ↑
NEW CITIZEN REACH ↑
그리고:
READY FOR OPERATOR APPROVAL

V.O 표시 (source_text):

이동 계획은 도시 운영망에 등록하고, 교통 승인이 끝나는 대로 야간 이동을 시작하겠습니다. 

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Relocation plan |
| 2 | 5 / 22 / 51 / 60 | 01 / Pack / 02 / Robot delivery / 03 / Module transport / 04 / Reconnect / 05 / Reconfigure / 06 / Open |
| 3 | 61 / 19 / 35 / 65 | Plan status / Route plan / Complete / Energy support / Scheduled / New site / Reserved / City network / Registration planned / City approval pending |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 도시 운영망 등록 중·승인 대기 유지 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: L72 승인 완료 체크와 I73 교통 승인 후 이동 발화 사이 상태 충돌 가능성. UI는 승인 조건부 시연안이며 원문은 그대로 보존.

### S4-5.1 · 야간 이전 예약·내일 업무 생성

- 의미 ID: s4:next_day_schedule:5.1 / 표시 순서 9
- 출처: G74, H74, I74, J74, L74
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

RELOCATION SCHEDULED
OVERNIGHT EXECUTION
NEXT OPEN 09:00
그리고 내일 업무 카드 생성:
TOMORROW
NEW SITE OPENING
CULTURE DISTRICT
09:00
그 아래:
- Opening Check
- Exhibition Setup
- Visitor Forecast
- New Site Operation Profile

V.O 표시 (source_text):

남은 작업은 제가 맡아둘 테니, 편히 돌아가세요.

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Relocation scheduled |
| 2 | 5 / 21 / 39 / 64 | Relocation scheduled / Execution / Subject to approval / Overnight execution / Next opening / 09:00 / Culture District / C-03 |
| 3 | 61 / 29 / 35 / 52 | Tomorrow / Opening check / Exhibition setup / Visitor forecast |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: L72 승인 완료 체크와 I73 교통 승인 후 이동 발화 사이 상태 충돌 가능성. UI는 승인 조건부 시연안이며 원문은 그대로 보존.

### S4-5.2 · 내일 출근·업무 예약 마감

- 의미 ID: s4:commute_preview:5.2 / 표시 순서 10
- 출처: G75, H75, I75, J75, L75
- 원문 길이: 미기입초 / 시연 루프 10초

화면 구성 원문:

오늘의 운영 콘솔이 하나씩 접힘.
그 대신 작은 예약 카드 두 개.
COMMUTE BRIEF — SCHEDULED
WORK BOARD — SCHEDULED
내일 출근 경로 위에 새 랜드마크 위치가 표시.
HOME → NEW LANDMARK
새 지점의 예상 방문객 / 운영 특성 / 첫 업무가 프리뷰로 살짝 보였다가 접힘.
화면 마지막:
TODAY OPERATION COMPLETE
SEE YOU TOMORROW

V.O 표시 (source_text):

그럼 내일 오전 새로운 거점에서 만나요.

필요 에셋: 해당 셀 미기입

| 주석 | 영역 좌표 left/top/width/height (%) | 실제 렌더 영역 문구 · 시연안 |
|---|---|---|
| 1 | 4 / 4 / 86 / 10 | Commute brief · Scheduled |
| 2 | 5 / 23 / 38 / 54 | Tomorrow / Commute brief / Scheduled / Work board / Scheduled / Home → New landmark C-03 |
| 3 | 63 / 24 / 33 / 51 | New site preview / Visitor forecast / 1,400 / First task / Opening check at 08:30 |
| 4 | 7 / 84 / 86 / 12 | Today's operation complete / See you tomorrow |

큐: 0% 핵심 문구·해당 컷의 누적 상태 즉시 표시 / 35% 현재 컷의 스캔·경로·파장 등 보조 모션 반복 / 70% 핵심 상태 유지; 자동 컷 이동 없음

제작 확인: 추가 확인 사항 없음.
