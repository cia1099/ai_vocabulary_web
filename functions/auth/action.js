export const onRequestGet = async ({ request, next }) => {
    const url = new URL(request.url);
    const mode = url.searchParams.get("mode");
    const oobCode = url.searchParams.get("oobCode");
    const apiKey = url.searchParams.get("apiKey");

    if (mode === "verifyEmail") {
        return Response.redirect(
            `https://ai-vocabulary-firebase.firebaseapp.com/__/auth/action?mode=${encodeURIComponent(mode)}&oobCode=${encodeURIComponent(oobCode || "")}&apiKey=${encodeURIComponent(apiKey || "")}`,
            302
        );
    }

    return next(); // 没拦截就 fallback 到 auth/action/index.html
};
