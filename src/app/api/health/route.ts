export async function GET() {
  const envVars = {
    hasApiKey: !!process.env.OPENROUTER_API_KEY,
    hasModel: !!process.env.OPENROUTER_MODEL,
    hasReferer: !!process.env.OPENROUTER_REFERER,
    nodeEnv: process.env.NODE_ENV,
  };

  return new Response(
    JSON.stringify({
      status: "ok",
      timestamp: new Date().toISOString(),
      environment: envVars,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
