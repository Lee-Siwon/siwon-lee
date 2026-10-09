# Homepage and CV refresh

Updated: 2026-10-09

## 작업 순서와 진행 상황

1. [x] 최신 GitHub 코드와 CV 확인, 별도 수정 브랜치 생성
2. [x] 첫 화면을 연구자 프로필로 변경하고 Math Note 메뉴 숨기기
3. [x] 프로필, 학력, 연구 소개, 교육 이력을 CV와 일치시키기
4. [x] 기존 논문 제목·상태를 유지하며 연구 소개와 기존 발표 이력 정리
5. [ ] 사용자가 제공할 새 CV PDF로 교체
6. [x] PC·모바일 화면, 홈페이지 링크 및 기존 Profile 주소 검토
7. [ ] 논문별 새 제목·상태·소개와 최근 발표 이력 확정
8. [ ] 필요시 논문 원고 수정 — 대상 파일과 수정 방향 확인 후 진행
9. [x] 수정 브랜치 GitHub 업로드 및 초안 PR 자료 준비
10. [ ] 확정된 내용을 main에 반영하고 siwon-lee.com 배포 확인

## 확정된 프로필과 디자인 방향

- 직함: PhD Candidate in Economics, Washington University in St. Louis.
- 연구 관심: Financial Markets, Asset Pricing, Exchange Rates, International Trade, Machine Learning.
- 학력을 소개 직후의 첫 번째 본문 섹션에 배치하고, 논문 제목·상태·펼쳐 읽는 소개를 구분한다.
- PhD Candidate 표기는 [WashU 경제학과 공식 프로필](https://economics.washu.edu/people/siwon-lee)로 연결한다.
- PC에서는 프로필과 탐색 메뉴를 왼쪽에 고정하고 본문을 오른쪽에 배치한다. 모바일에서는 한 열로 정리한다.
- 참고 구성: [Federal Reserve — Ryan Decker](https://www.federalreserve.gov/econres/ryan-a-decker.htm), [Stanford — Adrien Auclert](https://aauclert.people.stanford.edu/).

## 반영한 행사

| 행사 | 일정 | 장소 | 상태 |
| --- | --- | --- | --- |
| 2026 ZUEL International Workshop on Frontiers in Finance Research | Oct 9, 2026 | Online | Attended |
| Fall 2026 Midwest Macroeconomics Meeting | Nov 13–15, 2026 | Texas Tech University, Lubbock | Planned attendance |
| 7th ACM International Conference on AI in Finance (ICAIF 2026) | Nov 14–17, 2026 | Milan, Italy | Planned attendance |

두 예정 행사 모두 참석한다는 사용자 확인을 받았다. 주최 측에서 시간대를 조정할 예정이다. 발표자·토론자 역할과 논문 연결은 확인 후 반영한다.

공식 일정 출처: [ZUEL](https://dtf.zuel.edu.cn/szjsyxdjr-szjs_xshd/szjsyxdjr_cont_news/details-42474.html), [Midwest](https://www.depts.ttu.edu/economics/news-announcements/midwest-macroeconomics-meetings-2026.php), [ICAIF](https://icaif2026.org/).

## 관리 원칙

- CV의 학력·연구·교육 이력을 기준으로 홈페이지 내용을 맞춘다.
- 완료된 발표, 참석한 행사, 참석 예정인 행사를 구분한다.
- 행사 참석만으로 특정 논문을 발표했다고 표시하지 않는다.
- 기존 수학 노트는 보존하고 공개 프로필 메뉴에서 연결하지 않는다.
- 간단한 구현과 형식 정리는 Luna가 맡고, 주 에이전트가 내용과 결과를 검토한다.
- TeX 소스는 로컬에 보관하고 공개 저장소에는 CV PDF만 올린다.
- CV는 사용자가 제공하는 PDF만 반영하고 기존 PDF의 내용을 임의로 수정하지 않는다.
- 홈페이지에는 이메일·LinkedIn·전화번호를 표시하지 않는다.
