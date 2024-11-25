"use client";

import React, { useState } from "react";

type ApiResponse = {
  text: string;
};

const MindLetter: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [letter, setLetter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const generateLetter = async () => {
    setLoading(true);
    try {
      const response = await fetch("/pages/api/generate-letter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data: ApiResponse = await response.json();
      setLetter(data.text);
    } catch (error: any) {
      console.error("Error generating letter:", error);
      alert(`Failed to generate letter: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  console.log("Loaded API Key:", process.env.OPENAI_API_KEY);

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">마음 편지 생성기</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="마음에 담고 싶은 내용을 적어보세요."
        className="w-full p-4 border rounded-lg mb-4"
      />
      <button
        onClick={generateLetter}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "생성 중..." : "편지 생성"}
      </button>
      {letter && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">생성된 편지</h2>
          <p>{letter}</p>
        </div>
      )}
    </div>
  );
};

export default MindLetter;
