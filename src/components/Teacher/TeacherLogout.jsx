import React from 'react'

function TeacherLogout() {
    // if we click logout then our login information remove through localStorage and redirect to login again
    localStorage.removeItem('teacherLoginStatus')
    window.location.href='/teacher-login';
  return (
    <div>
      
    </div>
  )
}

export default TeacherLogout
