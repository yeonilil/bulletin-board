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
export async function getUserData() {
  return await GET(`http://localhost:3000/data/userData.json`);
}

export async function getCommentData() {
  return await GET(`http://localhost:3000/data/commentData.json`);
}
// POST API Layer
export async function POST(URL, formData) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // JSON 데이터를 보내는 경우
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to post data : ", error);
    throw error;
  }
}

// POST : 회원가입 유저 정보 생성
export async function postUser(formData) {
  const fetchData = await POST(
    `http://localhost:3000/data/userData.json`,
    formData
  );
  return fetchData;
}

// POST : 게시글 등록 정보 생성
export async function postInfo(formData) {
  const fetchData = await POST(
    `http://localhost:3000/data/postData.json`,
    formData
  );
  return fetchData;
}

// POST : 게시글 등록 정보 생성
export async function postComment(formData) {
  const fetchData = await POST(
    `http://localhost:3000/data/commentData.json`,
    formData
  );
  return fetchData;
}
