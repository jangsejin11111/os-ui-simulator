# 최신 S3·S4 재확인 및 배포 검증

같은 Google Sheets를 다시 읽고 시나리오 4의 10컷과 추가 변경된 시나리오 3의 10컷을 동기화했습니다. I53:I54 병합은 새 XLSX 내보내기에서 확인했고, S4의 [calm]/[delighted] 지시는 대사와 분리했습니다. 전체 45컷 레이아웃 검사 오류 0, 최신 20컷 V.O·실제 화면 대조 통과. 근거: verification/v3/refresh-verification.json. 아래는 이전 전체 반복 검증 기록입니다.

# 최신 원문·데이터 검증 v03

2026-10-04. Google Sheets의 전면 스토리보드와 동일 시점 XLSX 내보내기를 직접 확인했습니다. 스냅샷: data/storyboard-live-snapshot.json.

- 대상 45컷, 13 / 12 / 10 / 10. 최신 D열 컷 번호와 G/H/I 원문 전부 일치.
- I열 공백·문장부호를 그대로 보존. J열 참고 대본으로 대체하지 않음.
- XLSX 셀 문자열과 커넥터 읽기: 불일치 0. 병합 범위 I27:I28 확인.
- S1-4.1.1 I24 빈 V.O 유지. 병합 분할은 원문 전체·구간 오프셋과 편집 제안 상태를 별도 저장.
- S2-4.2 알림음 지시와 대사를 분리하되 rawCellText 원본 유지.
- S2 번호·의미 ID·화면·에셋 참조 일치. 3.5/4.4를 컷 배열에 추가하지 않음.
- semanticId 45개 중복 없음. 최신 참고 이미지 경로 전부 존재.
- cuts.presentation, display-demo, production-manifest 및 생성 SPEC 명세 일치.

확인 필요: S2 존댓말 혼재·도착 대사 중복, S1 병합 대사의 컷별 분할/음성 싱크, S4 승인 상태 충돌. 원문은 임의로 고치지 않았습니다.

기계 검증: scripts/validate-v3.cjs, verification/v3/data-validation.json. 전체 변경 대조: verification/storyboard-sync-report.json.
