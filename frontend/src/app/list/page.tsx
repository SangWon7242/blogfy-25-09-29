import { Heart, MessageCircleMore } from "lucide-react";

// 테스트 데이터 타입 정의
type Post = {
  id: number;
  title: string;
  author: string;
  createdAt: string;
};

// 테스트 데이터 10개
const MOCK_POSTS: Post[] = [
  {
    id: 1,
    title: "Next.js 14 App Router 완벽 가이드",
    author: "김개발",
    createdAt: "2025-10-01",
  },
  {
    id: 2,
    title: "TypeScript 5.0 새로운 기능 소개",
    author: "이코딩",
    createdAt: "2025-09-30",
  },
  {
    id: 3,
    title: "Tailwind CSS로 빠르게 UI 구축하기",
    author: "박프론트",
    createdAt: "2025-09-29",
  },
  {
    id: 4,
    title: "React Server Components 이해하기",
    author: "최리액트",
    createdAt: "2025-09-28",
  },
  {
    id: 5,
    title: "효율적인 Git 브랜치 전략",
    author: "정형상",
    createdAt: "2025-09-27",
  },
  {
    id: 6,
    title: "REST API vs GraphQL 비교 분석",
    author: "강백엔드",
    createdAt: "2025-09-26",
  },
  {
    id: 7,
    title: "Docker 컨테이너 배포 가이드",
    author: "윤데브옵스",
    createdAt: "2025-09-25",
  },
  {
    id: 8,
    title: "웹 성능 최적화 10가지 팁",
    author: "임최적화",
    createdAt: "2025-09-24",
  },
  {
    id: 9,
    title: "클린 코드 작성하는 법",
    author: "한클린",
    createdAt: "2025-09-23",
  },
  {
    id: 10,
    title: "모던 자바스크립트 디자인 패턴",
    author: "오자바",
    createdAt: "2025-09-22",
  },
];

export default function ListPage() {
  return (
    <section className="list-section flex-1 flex flex-col">
      <div className="inner flex-1 flex flex-col py-8 px-6 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-8">내 글</h1>

        {MOCK_POSTS.length === 0 ? (
          <p className="text-gray-500 text-center py-12">게시글이 없습니다.</p>
        ) : (
          <div className="post-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MOCK_POSTS.map((post) => (
              <article
                key={post.id}
                className="post-card bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* 썸네일 이미지 */}
                <div className="thumbnail-box relative w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/30">
                    {post.id}
                  </div>
                </div>

                {/* 카드 내용 */}
                <div className="card-content p-4 flex-1 flex flex-col">
                  {/* 제목 */}
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    <a href={`/post/${post.id}`}>{post.title}</a>
                  </h2>

                  {/* 작성자 및 날짜 */}
                  <div className="meta-info flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <span className="author font-medium">{post.author}</span>
                    <span className="text-gray-400">·</span>
                    <time className="date">{post.createdAt}</time>
                  </div>

                  {/* 하단 액션 */}
                  <div className="card-footer mt-auto flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span>{Math.floor(Math.random() * 50)}</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                        <MessageCircleMore className="w-4 h-4" />
                        <span>{Math.floor(Math.random() * 30)}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
