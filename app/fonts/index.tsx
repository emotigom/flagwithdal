export default function Home() {
  return (
    <div className="flex flex-col items-center text-center h-screen bg-green-600">
      <div className="bg-black text-white py-5 w-full">웹사이트 제작</div>
      <div className="flex justify-around w-full bg-orange-500 py-3">
        <div className="text-white font-bold">마음 편지</div>
        <div className="text-white font-bold">배리어프리</div>
        <div className="text-white font-bold">장애인 개인 예산제</div>
        <div className="text-white font-bold">이동의 자유</div>
        <div className="text-white font-bold">인식개선</div>
        <div className="text-white font-bold">편의즐기기</div>
      </div>
      <div className="flex-1 w-full bg-green-600"></div>
    </div>
  );
}
