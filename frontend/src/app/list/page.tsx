"use client";
import { useState, useEffect } from "react";
import { Heart, MessageCircleMore } from "lucide-react";

// 테스트 데이터 타입 정의
interface Post {
  id: number;
  createDate: string;
  modifiedDate: string;
  title: string;
  content: string;
  username: string;
}

// 날짜 포맷팅 함수
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  // 유효하지 않은 날짜 처리
  if (isNaN(date.getTime())) {
    return dateString;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export default function ListPage() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/post/list")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
        setError(error);
      });
  }, []);

  return (
    <section className="list-section flex-1 flex flex-col">
      <div className="inner flex-1 flex flex-col py-8 px-6 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-8">내 글</h1>

        {loading ? (
          <p className="text-gray-500 text-center py-12">로딩 중...</p>
        ) : posts?.length === 0 ? (
          <p className="text-gray-500 text-center py-12">게시글이 없습니다.</p>
        ) : (
          <div className="post-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {posts?.map((post) => (
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
                    <span className="author font-medium">{post.username}</span>
                    <span className="text-gray-400">·</span>
                    <time className="date">{formatDate(post.createDate)}</time>
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
