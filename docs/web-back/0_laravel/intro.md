---
title: Laravel 소개
description: Laravel의 탄생 배경, 개발 철학, 주요 개념과 현황을 정리합니다.
slug: laravel-intro
sidebar_position: 0
---

# Laravel이란?

## 개요

Laravel은 **웹 애플리케이션 개발을 위한 PHP 프레임워크**입니다.  
2011년 Taylor Otwell이 개발했으며, 현재 PHP 생태계에서 가장 인기 있는 프레임워크입니다.

:::tip 핵심 정의
Laravel = 우아한 문법 + MVC 아키텍처 + 풍부한 기능 + 개발자 경험 최우선
:::

---

## Laravel의 탄생 배경

### 당시의 문제 상황 (2011년)

PHP 프레임워크 시장에는 **CodeIgniter**가 주류였지만, 한계가 있었습니다:

**CodeIgniter의 문제점**:
- 기본 인증 시스템 부재
- 의존성 관리 미흡
- 레거시 코드 스타일
- 확장성 제한

**다른 프레임워크들의 한계**:
- Symfony: 너무 복잡하고 무거움
- Zend: 설정이 까다로움
- CakePHP: 관례가 너무 강함

### Taylor Otwell의 비전

```
"아름다운 코드를 작성하면서도
빠르게 개발할 수 있는 프레임워크가 필요하다"
```

이 비전에서 Laravel이 시작되었습니다.

---

## Laravel의 개발 철학

Laravel은 다음과 같은 소프트웨어 공학 원칙을 바탕으로 설계되었습니다:

### 1. 개발자 경험 최우선 (Developer Happiness)

**핵심 가치**: "개발자가 즐겁게 코딩할 수 있어야 한다"

**표현적 문법 (Expressive Syntax)**:
```php
// 전통적인 PHP
$users = DB::table('users')
    ->where('active', 1)
    ->orderBy('name', 'asc')
    ->get();

// Laravel Eloquent (우아함)
$users = User::where('active', true)
    ->orderBy('name')
    ->get();
```

**장점**: 코드가 읽기 쉽고, 의도가 명확함

---

### 2. MVC 아키텍처 (Model-View-Controller)

**설계 패턴**: MVC Pattern (관심사 분리)

```
Request
  ↓
Router → Controller → Model (Database)
           ↓
        View (Blade Template)
           ↓
        Response
```

**소프트웨어 공학 원칙**:
- **관심사 분리 (SoC)**: 비즈니스 로직, 데이터, UI 분리
- **단일 책임 원칙 (SRP)**: 각 레이어가 하나의 책임만
- **의존성 역전 (DIP)**: 인터페이스를 통한 느슨한 결합

---

### 3. Convention over Configuration

**철학**: "설정보다 관례"

```php
// 모델 이름으로 테이블 자동 추론
class User extends Model {
    // 'users' 테이블 자동 매핑
    // 'id' 가 primary key
    // 'created_at', 'updated_at' 자동 관리
}
```

**장점**:
- 보일러플레이트 코드 최소화
- 빠른 개발 속도
- 일관된 코드 스타일

---

### 4. Artisan CLI (장인 정신)

**개발 도구**: 명령줄 인터페이스

```bash
# 컨트롤러 생성
php artisan make:controller UserController

# 마이그레이션 생성
php artisan make:migration create_users_table

# 데이터베이스 마이그레이션 실행
php artisan migrate
```

**철학**: "반복 작업은 자동화하라"

---

## Laravel의 주요 개념

### Routing (라우팅)

URL과 컨트롤러를 연결하는 메커니즘

```php
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
```

---

### Eloquent ORM

객체 관계 매핑. 데이터베이스를 객체처럼 다룸

```php
// 사용자 생성
User::create(['name' => '홍길동', 'email' => 'hong@example.com']);

// 사용자 조회
$user = User::find(1);

// 관계 정의
class User extends Model {
    public function posts() {
        return $this->hasMany(Post::class);
    }
}
```

**패턴**: Active Record Pattern

---

### Blade Template Engine

뷰를 위한 템플릿 엔진

```blade
@foreach($users as $user)
    <div>{{ $user->name }}</div>
@endforeach

@if(Auth::check())
    <p>안녕하세요, {{ Auth::user()->name }}님</p>
@endif
```

**특징**: PHP와 HTML 혼합, 재사용 가능한 컴포넌트

---

### Migration (마이그레이션)

데이터베이스 버전 관리

```php
Schema::create('users', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email')->unique();
    $table->timestamps();
});
```

**장점**: Git처럼 DB 변경 이력 관리

---

### Middleware

요청/응답 처리 파이프라인

```php
// 인증 체크
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
});
```

**패턴**: Pipeline Pattern, Decorator Pattern

---

### Service Container & Dependency Injection

의존성 자동 주입

```php
class UserController extends Controller {
    public function __construct(UserRepository $users) {
        $this->users = $users; // 자동 주입
    }
}
```

**패턴**: Dependency Injection, IoC Container

---

## Laravel의 현황과 인기

### 사용 통계 (2024년 기준)

| 지표 | 수치 |
|------|------|
| **GitHub Stars** | 78,000+ |
| **Packagist 다운로드** | 400M+ (누적) |
| **StackOverflow 질문 수** | 200,000+ |
| **PHP 프레임워크 점유율** | 1위 (50%+) |
| **활성 웹사이트** | 1.5M+ |

---

### 주요 사용 기업/서비스

**글로벌**:
- Invoice Ninja (인보이스 관리)
- October CMS (CMS)
- Monica (개인 CRM)
- Cachet (상태 페이지)

**한국**:
- 크몽
- 직방
- 마이리얼트립
- 숨고
- 다수의 스타트업

**산업 분야**:
- SaaS 플랫폼
- 전자상거래
- CMS/블로그
- API 백엔드
- 기업 내부 시스템

---

### 생태계

**공식 패키지 (Laravel Ecosystem)**:
- **Laravel Nova**: 관리자 패널
- **Laravel Forge**: 서버 배포 자동화
- **Laravel Envoyer**: 무중단 배포
- **Laravel Vapor**: 서버리스 배포 (AWS Lambda)
- **Laravel Spark**: SaaS 스타터킷

**인기 패키지**:
- **Livewire**: SPA처럼 동작하는 풀스택 프레임워크
- **Inertia.js**: React/Vue와 Laravel 연결
- **Sanctum**: API 인증
- **Telescope**: 디버깅 도구
- **Horizon**: 큐 모니터링

**프론트엔드**:
- Blade (기본)
- Vue.js
- React
- Alpine.js

---

## Laravel이 해결한 문제들

### 1. 복잡한 설정

**문제**: Symfony, Zend의 복잡한 설정 파일  
**해결**: Convention over Configuration + .env 파일

---

### 2. 인증/인가 구현

**문제**: 매번 인증 시스템 직접 구현  
**해결**: 내장 인증 시스템 + Laravel Breeze/Jetstream

```bash
# 인증 스캐폴딩 한 줄로 완성
php artisan breeze:install
```

---

### 3. 데이터베이스 관리

**문제**: SQL 직접 작성, 마이그레이션 수동 관리  
**해결**: Eloquent ORM + Migration + Seeding

---

### 4. API 개발

**문제**: RESTful API 개발 복잡  
**해결**: API Resources + Sanctum/Passport

---

### 5. 실시간 기능

**문제**: WebSocket 구현 어려움  
**해결**: Laravel Echo + Broadcasting

---

## Laravel의 아키텍처 패턴

Laravel에서 자주 사용되는 패턴들:

### 1. Repository Pattern

데이터 접근 로직 분리:

```php
interface UserRepositoryInterface {
    public function all();
    public function find($id);
    public function create(array $data);
}

class EloquentUserRepository implements UserRepositoryInterface {
    public function all() {
        return User::all();
    }
    // ...
}
```

---

### 2. Service Pattern

비즈니스 로직 캡슐화:

```php
class UserService {
    public function createUser(array $data) {
        // 비즈니스 로직
        $user = User::create($data);
        Mail::to($user)->send(new WelcomeMail());
        return $user;
    }
}
```

---

### 3. Observer Pattern

모델 이벤트 처리:

```php
class UserObserver {
    public function created(User $user) {
        // 사용자 생성 후 실행
        Log::info("User created: {$user->id}");
    }
}
```

---

### 4. Factory Pattern

테스트 데이터 생성:

```php
User::factory()->count(10)->create();
```

---

## Laravel의 발전 과정

### 주요 버전 히스토리

| 버전 | 연도 | 주요 변화 |
|------|------|----------|
| **v1** | 2011 | 최초 릴리스 |
| **v4** | 2013 | Composer 기반 재작성 |
| **v5** | 2015 | LTS 도입 |
| **v5.5** | 2017 | 패키지 자동 탐색 |
| **v6** | 2019 | Semantic Versioning 시작 |
| **v8** | 2020 | Laravel Jetstream 🔥 |
| **v9** | 2022 | PHP 8.0+ 요구 |
| **v10** | 2023 | PHP 8.1+ 요구 |
| **v11** | 2024 | 최신 PHP 기능 활용 |

---

### Livewire의 등장 (2019)

**혁신**: SPA 경험 + 서버사이드 렌더링

```php
class Counter extends Component {
    public $count = 0;
    
    public function increment() {
        $this->count++;
    }
    
    public function render() {
        return view('livewire.counter');
    }
}
```

**영향**: JavaScript 없이도 인터랙티브 UI 구현

---

## Laravel의 경쟁 기술

### PHP 프레임워크 비교

| 항목 | Laravel | Symfony | CodeIgniter | CakePHP |
|------|---------|---------|-------------|---------|
| **난이도** | 중간 | 높음 | 낮음 | 중간 |
| **생태계** | 가장 풍부 | 풍부 | 작음 | 중간 |
| **성능** | 중간 | 높음 | 높음 | 중간 |
| **커뮤니티** | 가장 큼 | 큼 | 중간 | 작음 |
| **학습 곡선** | 완만 | 가파름 | 완만 | 중간 |
| **문서 품질** | 최고 | 좋음 | 보통 | 보통 |

---

### 다른 언어 프레임워크와 비교

| 프레임워크 | 언어 | 특징 |
|----------|------|------|
| **Laravel** | PHP | 우아함, 풍부한 생태계 |
| **Django** | Python | Batteries included |
| **Ruby on Rails** | Ruby | Convention over Configuration |
| **Express** | Node.js | 미니멀, 유연 |
| **Spring Boot** | Java | 엔터프라이즈급 |

---

### Laravel을 선택하는 이유

1. **빠른 개발 속도**: 내장 기능 풍부
2. **우아한 코드**: 표현적 문법
3. **풍부한 생태계**: 공식 패키지 다수
4. **훌륭한 문서**: 초보자도 이해하기 쉬움
5. **활발한 커뮤니티**: Laracasts, Laracon 등
6. **취업 시장**: PHP 시장에서 가장 수요 많음

---

## Laravel의 철학: The Laravel Way

### 1. 단순함 (Simplicity)

```php
// 복잡한 작업도 간단하게
Mail::to($user)->send(new WelcomeEmail());
```

---

### 2. 우아함 (Elegance)

```php
// 읽기 쉬운 코드
return User::with('posts')
    ->whereHas('subscriptions', function($query) {
        $query->active();
    })
    ->get();
```

---

### 3. 개발자 행복 (Developer Happiness)

- 즐거운 개발 경험
- 생산성 향상
- 창의성 발휘

---

### 4. 커뮤니티 (Community)

- Laracasts (비디오 튜토리얼)
- Laracon (컨퍼런스)
- Laravel News (뉴스)
- Laravel.io (포럼)

---

## Laravel의 강점과 약점

### 강점 ✅

1. **빠른 개발**: 보일러플레이트 최소화
2. **풍부한 기능**: 인증, 메일, 큐 등 내장
3. **훌륭한 문서**: 가장 잘 정리된 문서
4. **생태계**: 공식 패키지 풍부
5. **커뮤니티**: 활발하고 친절함
6. **학습 자료**: Laracasts 등 양질의 자료

---

### 약점 ❌

1. **성능**: 순수 PHP보다 느림 (트레이드오프)
2. **메모리**: 상대적으로 많은 메모리 사용
3. **PHP 의존**: PHP의 한계 상속
4. **과한 매직**: 내부 동작 이해 어려울 수 있음
5. **레거시 지원**: 구버전 PHP 지원 안 함

---
### 필수 선행 지식

**PHP 기초** (필수):
- 변수, 함수, 클래스
- 배열, 반복문, 조건문
- OOP (객체지향 프로그래밍)
- Namespace, Autoloading

**웹 기초** (필수):
- HTTP 요청/응답
- HTML/CSS
- 데이터베이스 기본 (SQL)

**추천** (선택):
- Composer (PHP 패키지 관리자)
- Git (버전 관리)
- 리눅스 기본 명령어

---

### 추천 학습 자료

**공식 문서**:
- https://laravel.com/docs (영문)
- https://laravel.kr (한국어)

**비디오 강의**:
- Laracasts (최고 품질, 유료)
- Laravel Daily (유튜브)
- 인프런 Laravel 강의

**실습 환경**:
- Laravel Sail (Docker 기반)
- Valet (macOS)
- Homestead (가상 머신)

**커뮤니티**:
- Laravel Korea (페이스북 그룹)
- Laravel 한국 사용자 모임
- Larachat (슬랙)

---

:::tip 학습 전 알아두기
Laravel은 **"convention over configuration"** 철학을 따릅니다.  
Laravel이 정한 규칙을 따르면 설정 없이도 대부분 동작합니다.

처음엔 "마법" 같아 보이지만, 이 규칙을 익히면  
**놀라운 생산성**을 경험하게 됩니다! 🚀

PHP 기초가 탄탄하지 않다면 먼저 PHP를 공부하고 오세요.  
Laravel은 PHP를 대체하는 게 아니라 **PHP 위에서 동작**합니다!
:::

---