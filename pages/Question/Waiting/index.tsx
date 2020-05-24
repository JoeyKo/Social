import Card from "../../../components/Card";
import Layout from '../../../components/Layout'

function QuestionWaitingPage() {

  return (
    <Layout>
      <div className="searchContainer">question waiting page</div>
      <style jsx>{`
        .searchContainer {
          display: flex;
          align-items: flex-start;
          position: relative;
          width: 1000px;
          min-height: 100vh;
          padding: 0 16px;
          margin: 10px auto;
          color: #1a1a1a;
        }
      `}</style>
    </Layout>
  );
}

export default QuestionWaitingPage;