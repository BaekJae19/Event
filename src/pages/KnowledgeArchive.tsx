import { Search, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { useState } from 'react';

interface Topic {
  id: number;
  title: string;
  category: string;
  date: string;
  content: {
    description: string;
    diagram?: string;
    details: string[];
    codeExample?: string;
  };
}

export default function KnowledgeArchive() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'OS', 'Network', 'DB', 'Algo'];

  const topics: Topic[] = [
    {
      id: 1,
      title: 'Process vs Thread',
      category: 'OS',
      date: '2026.02.12',
      content: {
        description: '프로세스와 스레드는 운영체제에서 실행 단위를 나타내는 중요한 개념입니다.',
        diagram: 'Process and Thread Architecture Diagram',
        details: [
          '프로세스(Process): 실행 중인 프로그램의 인스턴스로, 독립적인 메모리 공간을 가집니다.',
          '스레드(Thread): 프로세스 내에서 실행되는 흐름의 단위로, 같은 프로세스의 자원을 공유합니다.',
          '프로세스는 최소 하나 이상의 스레드를 가지며, 각 프로세스는 독립적인 메모리 영역(Code, Data, Heap, Stack)을 할당받습니다.',
          '스레드는 Stack만 따로 할당받고 Code, Data, Heap 영역은 공유합니다.',
          '멀티 프로세스는 안정성이 높지만 오버헤드가 크고, 멀티 스레드는 효율적이지만 동기화 문제가 발생할 수 있습니다.'
        ],
        codeExample: `// Thread 생성 예제 (Java)
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start();
    }
}`
      }
    },
    {
      id: 2,
      title: 'TCP vs UDP',
      category: 'Network',
      date: '2026.02.10',
      content: {
        description: 'TCP와 UDP는 전송 계층의 대표적인 프로토콜입니다.',
        diagram: 'TCP/UDP Comparison Diagram',
        details: [
          'TCP (Transmission Control Protocol): 연결 지향적 프로토콜로 신뢰성 있는 데이터 전송을 보장합니다.',
          'UDP (User Datagram Protocol): 비연결형 프로토콜로 빠른 전송이 가능하지만 신뢰성은 보장하지 않습니다.',
          'TCP는 3-way handshake를 통해 연결을 수립하고, 4-way handshake로 연결을 종료합니다.',
          'UDP는 실시간 스트리밍, 온라인 게임 등 속도가 중요한 서비스에 적합합니다.',
          'TCP는 흐름 제어, 혼잡 제어, 오류 제어 기능을 제공합니다.'
        ],
        codeExample: `// TCP Socket 예제 (Python)
import socket

# TCP 서버 소켓 생성
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 8080))
server_socket.listen(5)

print("Server is listening...")
client_socket, addr = server_socket.accept()
print(f"Connected to {addr}")`
      }
    },
    {
      id: 3,
      title: 'Normalization',
      category: 'DB',
      date: '2026.02.08',
      content: {
        description: '정규화는 데이터베이스 설계에서 중복을 최소화하고 데이터 무결성을 유지하기 위한 과정입니다.',
        diagram: 'Database Normalization Forms Diagram',
        details: [
          '제1정규형(1NF): 각 컬럼이 원자값(Atomic Value)을 가져야 합니다.',
          '제2정규형(2NF): 1NF를 만족하고, 부분 함수 종속을 제거해야 합니다.',
          '제3정규형(3NF): 2NF를 만족하고, 이행 함수 종속을 제거해야 합니다.',
          'BCNF: 3NF를 만족하고, 모든 결정자가 후보키여야 합니다.',
          '정규화의 목적은 데이터 중복 최소화, 삽입/수정/삭제 이상 현상 방지입니다.'
        ],
        codeExample: `-- 정규화 전 (1NF 위반)
CREATE TABLE Orders (
    OrderID INT,
    Products VARCHAR(255)  -- "Apple, Banana, Orange"
);

-- 정규화 후 (1NF 만족)
CREATE TABLE Orders (
    OrderID INT,
    ProductID INT
);

CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100)
);`
      }
    },
    {
      id: 4,
      title: 'Quick Sort',
      category: 'Algo',
      date: '2026.02.05',
      content: {
        description: '퀵 정렬은 분할 정복 알고리즘을 사용하는 효율적인 정렬 알고리즘입니다.',
        diagram: 'Quick Sort Partition Process',
        details: [
          '평균 시간 복잡도: O(n log n), 최악 시간 복잡도: O(n²)',
          '피벗(Pivot)을 선택하고, 피벗을 기준으로 작은 값은 왼쪽, 큰 값은 오른쪽으로 분할합니다.',
          '분할된 부분 리스트에 대해 재귀적으로 퀵 정렬을 수행합니다.',
          '제자리 정렬(in-place sort)로 추가 메모리가 거의 필요하지 않습니다.',
          '불안정 정렬(unstable sort)이며, 피벗 선택에 따라 성능이 크게 달라집니다.'
        ],
        codeExample: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

# 사용 예제
arr = [3, 6, 8, 10, 1, 2, 1]
print(quick_sort(arr))  # [1, 1, 2, 3, 6, 8, 10]`
      }
    },
    {
      id: 5,
      title: 'HTTP vs HTTPS',
      category: 'Network',
      date: '2026.02.03',
      content: {
        description: 'HTTP와 HTTPS는 웹 통신에 사용되는 프로토콜로, 보안 측면에서 차이가 있습니다.',
        diagram: 'HTTPS Encryption Process',
        details: [
          'HTTP: HyperText Transfer Protocol로 평문으로 데이터를 전송합니다.',
          'HTTPS: HTTP + SSL/TLS로 데이터를 암호화하여 전송합니다.',
          'HTTPS는 SSL/TLS 인증서를 사용하여 서버의 신원을 확인합니다.',
          '포트 번호: HTTP는 80번, HTTPS는 443번 포트를 사용합니다.',
          'HTTPS는 데이터 무결성, 기밀성, 인증을 제공하여 보안을 강화합니다.'
        ],
        codeExample: `// HTTPS 요청 예제 (Node.js)
const https = require('https');

https.get('https://api.example.com/data', (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    res.on('end', () => {
        console.log(JSON.parse(data));
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});`
      }
    }
  ];

  const filteredTopics = topics.filter(topic => {
    const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory;
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentTopic = topics.find(t => t.id === selectedTopic);
  const currentIndex = topics.findIndex(t => t.id === selectedTopic);

  const categoryColors: Record<string, string> = {
    OS: 'bg-[#57B7E9] text-white',
    Network: 'bg-[#B4E4CE] text-[#2C3E50]',
    DB: 'bg-[#FFD6E8] text-[#2C3E50]',
    Algo: 'bg-[#FFF4B3] text-[#2C3E50]'
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Sidebar - Knowledge List */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#E8F5FE] flex items-center justify-center">
                <BookOpen size={20} className="text-[#57B7E9]" />
              </div>
              <h2 className="text-lg font-bold text-[#2C3E50]">CS Archive</h2>
            </div>

            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5F6C7B]" size={18} />
              <input
                type="text"
                placeholder="Search keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border-2 border-[#E5E9EF] rounded-xl focus:border-[#57B7E9] focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[#57B7E9] text-white shadow-sm'
                      : 'bg-[#F5F7FA] text-[#5F6C7B] hover:bg-[#E8F5FE]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Topic List */}
            <div className="space-y-2 max-h-[500px] overflow-y-auto">
              {filteredTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    selectedTopic === topic.id
                      ? 'bg-[#E8F5FE] border-2 border-[#57B7E9]'
                      : 'bg-[#F5F7FA] border-2 border-transparent hover:border-[#E5E9EF]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3
                      className={`font-semibold text-sm ${
                        selectedTopic === topic.id ? 'text-[#57B7E9]' : 'text-[#2C3E50]'
                      }`}
                    >
                      {topic.title}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                        categoryColors[topic.category]
                      }`}
                    >
                      {topic.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#5F6C7B]">{topic.date}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Detail View */}
        <div className="lg:col-span-7">
          {currentTopic && (
            <div className="bg-white rounded-2xl shadow-sm p-8">
              {/* Header */}
              <div className="border-b border-[#E5E9EF] pb-6 mb-6">
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                      categoryColors[currentTopic.category]
                    }`}
                  >
                    {currentTopic.category === 'OS' && 'Operating System'}
                    {currentTopic.category === 'Network' && 'Network'}
                    {currentTopic.category === 'DB' && 'Database'}
                    {currentTopic.category === 'Algo' && 'Algorithm'}
                  </span>
                  <span className="text-sm text-[#5F6C7B]">{currentTopic.date}</span>
                </div>
                <h1 className="text-3xl font-bold text-[#2C3E50]">{currentTopic.title}</h1>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-[#2C3E50] leading-relaxed text-lg">
                  {currentTopic.content.description}
                </p>
              </div>

              {/* Diagram Placeholder */}
              {currentTopic.content.diagram && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-[#2C3E50] mb-4">📊 개념 다이어그램</h2>
                  <div className="bg-[#F5F7FA] border-2 border-dashed border-[#E5E9EF] rounded-xl p-12 flex items-center justify-center">
                    <p className="text-[#5F6C7B] font-medium">{currentTopic.content.diagram}</p>
                  </div>
                </div>
              )}

              {/* Details */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#2C3E50] mb-4">📝 상세 설명</h2>
                <ul className="space-y-3">
                  {currentTopic.content.details.map((detail, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-[#57B7E9] font-bold mt-1">•</span>
                      <span className="text-[#2C3E50] leading-relaxed flex-1">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code Example */}
              {currentTopic.content.codeExample && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-[#2C3E50] mb-4">💻 코드 예제</h2>
                  <div className="bg-[#1E293B] rounded-xl p-6 overflow-x-auto">
                    <pre className="text-sm text-[#E2E8F0] font-mono leading-relaxed">
                      <code>{currentTopic.content.codeExample}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-[#E5E9EF]">
                <button
                  onClick={() => currentIndex > 0 && setSelectedTopic(topics[currentIndex - 1].id)}
                  disabled={currentIndex === 0}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    currentIndex === 0
                      ? 'bg-[#F5F7FA] text-[#5F6C7B] cursor-not-allowed'
                      : 'bg-[#57B7E9] text-white hover:bg-[#4A9FD4] shadow-sm'
                  }`}
                >
                  <ChevronLeft size={20} />
                  Previous Topic
                </button>
                <button
                  onClick={() =>
                    currentIndex < topics.length - 1 && setSelectedTopic(topics[currentIndex + 1].id)
                  }
                  disabled={currentIndex === topics.length - 1}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    currentIndex === topics.length - 1
                      ? 'bg-[#F5F7FA] text-[#5F6C7B] cursor-not-allowed'
                      : 'bg-[#57B7E9] text-white hover:bg-[#4A9FD4] shadow-sm'
                  }`}
                >
                  Next Topic
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
