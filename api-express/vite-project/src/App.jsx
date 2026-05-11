import { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Headline from './components/Headline';
import ItemList from './components/ItemList';
import Aside from './components/Aside';
import BoxList from './components/BoxList';
import Footer from './components/Footer';

const blog = {
  bigTitle: 'Hướng dẫn học React.js.',
  itemList: [
    { title: 'Giới thiệu', info: 'React.js là gì.' },
    {
      title: 'Component của React.js',
      info: 'Thành phần quan trọng của React.js là component.',
    },
    { title: 'Props and state', info: 'Quản lý trạng thái và lấy dữ liệu.' },
  ],
  boxList: ['Vũ Toàn Thắng', 'React.js', 'NodeJs', 'Express.js'],
};

const updatedItemList = [
  { title: 'Giới thiệu React.js', info: 'Khái niệm React.js.' },
  {
    title: 'Thành phần của React.js',
    info: 'Components là thành phần quan trọng của React.js.',
  },
  {
    title: 'Cập nhật dữ liệu bằng setState',
    info: 'Props and state.',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      bigTitle: blog.bigTitle,
      itemList: blog.itemList,
      boxList: blog.boxList,
      useUpdatedItems: false,
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/api/test')
      .then((result) => this.setState({ message: result.data.message }))
      .catch((err) => console.error(err));
  }

  changeItem = () => {
    this.setState((prev) => {
      const nextUpdated = !prev.useUpdatedItems;
      return {
        useUpdatedItems: nextUpdated,
        itemList: nextUpdated ? updatedItemList : blog.itemList,
      };
    });
  };

  render() {
    return (
      <div id="layout">
        <Header />
        <main>
          <section id="content">
            <p className="api-message">{this.state.message}</p>
            <Headline bigTitle={this.state.bigTitle} />
            <ItemList itemList={this.state.itemList} />
            <button
              type="button"
              className="change-data-btn"
              onClick={this.changeItem}
            >
              Change Data
            </button>
          </section>
          <Aside />
          <BoxList boxList={this.state.boxList} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
