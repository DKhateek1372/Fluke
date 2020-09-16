/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import { CubytCategoriesAction } from '../store/home/actions';
import Searchbar from '../components/UiSearch/index';
import 'antd/dist/antd.css'
import '../styles/index.css';
import {columns} from './tableData';

const Fluke = (props) => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => {
    return state.cubytCategories.loading;
  });

  const cubytCategories = useSelector((state) => {
    return state.cubytCategories.cubytCategories;
  });

  const [state, setState] = React.useState([]);


  useEffect(() => {
    dispatch(CubytCategoriesAction.fetchCubytCategoriesRequest());
    // eslint-disable-next-line
  }, []);

  const [search, setSearchState] = React.useState({
    searchText: "",
  });

  useEffect(() => {
    setState(
      cubytCategories  
    )
  }, [cubytCategories]);

  let { searchText } = search;

  const SearchHandler = (e) => {
    setSearchState(e.target.value);
    const text = e.target.value;
    const searchText = text.toLowerCase();
    const data =
      !!state &&
      Array.isArray(state) &&
      state.length > 0 &&
      state.filter(data =>
        data.category_name.toLowerCase().includes(searchText) ||
        data.display_name.toString().includes(searchText)
      );
    searchText !== '' ? setState(data) : setState(cubytCategories);
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Col className="text-hn-orange items-center justify-between">
            <h1 className="text-3xl">Fluke Calibration System</h1>{' '}
            <hr className="border mtl-6"></hr>
            <Searchbar searchHandler={SearchHandler} searchBar={searchText} />
          </Col>
          <Col lg={12} md={12} className="p-4 inFlex parent margin">
           <Table columns={columns} dataSource={state} />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

Fluke.propTypes = {
  display_name: PropTypes.string,
  category_name:PropTypes.string,
  description:PropTypes.string,
  image_uri:PropTypes.string,
  attributes:PropTypes.array,
  spec_parameters: PropTypes.array
};

export default Fluke;
