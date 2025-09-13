function navigateTo(page) {
  window.location.href = page;
}

function redirectToQuizEnd() {
  navigateTo('/quiz-end.html'); // Redirects to a quiz end page
}

function handleRouting() {
  const path = window.location.pathname;
  if (path === '/quiz') {
    // Logic for displaying quiz
  } else if (path === '/quiz-end') {
    // Logic for displaying quiz results
  } else {
    navigateTo('/'); // Redirect to home if no valid route
  }
}

if (typeof window !== 'undefined') {
  window.onload = handleRouting;
}

export { navigateTo };