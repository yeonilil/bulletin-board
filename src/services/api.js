// GET API Layer
async function GET(URL) {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to get data : ", error);
    throw error;
  }
}

// GET : 게시글 데이터
export async function getPostData() {
  return await GET(`http://localhost:3000/data/postData.json`);
}
