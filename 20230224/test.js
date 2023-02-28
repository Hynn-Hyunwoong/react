class Test extends React.Component {
    render() {
      const isLoggedIn = this.props.isLoggedIn
      console.dir(this)
      if (isLoggedIn) {
        return <h1>Hynn Tistory Blog</h1>
      } else {
        return <h1>Welcome to My Tistory Blog</h1>
      }
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"))
  root.render(<Test isLoggedIn={true} />)