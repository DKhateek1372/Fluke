import { array } from 'prop-types';
import React from 'react';
const renderCell = (object, type, key) => {
    const imageUrl = 'https://react.semantic-ui.com/images/wireframe/image.png';
    const ObjKey = object[key];
    console.log('@76476537458345', 'ObjKey', ObjKey);
    const image = ObjKey === null && type === 'ImageCell' ? imageUrl : ObjKey;
    const text = ObjKey === null && type === 'textCell' ? '-' : ObjKey;
    const arrayVal = ObjKey === null && type === 'arrayCell' ? '-' : ObjKey;
    const ObjectVal = ObjKey === null && type === 'objectCell' ? '-' : ObjKey;
    switch (type) {
        case 'ImageCell':
            // eslint-disable-next-line react/react-in-jsx-scope
            return (<img src={image} alt="" width="100px" height="75px" />);
        case 'arrayCell':
            return (
                Array.isArray(arrayVal) &&
                    arrayVal.length > 0 ?
                    arrayVal.map(item => <p>{item}</p>) :
                    '-'
            );
        case 'objectCell':
            return (
                Object.is(ObjectVal) &&
                Object.keys(ObjectVal).length > 0 ?
                    Object.values(ObjectVal).map(item => <p>{item}</p>) :
                    '-'
            );
        default:
            return (<p>{text}</p>);
    }
};


export const columns = [
    {
        title: 'Display Name',
        className: 'isoTextCell',
        width: '300',
        render: object => renderCell(object, 'textCell', 'display_name'),
    },
    {
        title: 'Category Name',
        className: 'isoTextCell',
        width: '300',
        render: object => renderCell(object, 'textCell', 'category_name'),
    },
    {
        title: 'Description',
        className: 'isoTextCell',
        width: '300',
        render: object => renderCell(object, 'textCell', 'description'),
    },
    {
        title: 'Image',
        width: '25%',
        className: 'isoImageCell',
        render: object => renderCell(object, 'ImageCell', 'image_uri'),
    },
    {
        title: 'Attributes',
        className: 'isoTextCell',
        width: '300',
        render: object => renderCell(object, 'arrayCell', 'attributes'),
    },
    {
        title: 'Parameters',
        // dataIndex: 'spec_parameters',
        className: 'isoTextCell',
        width: '300',
        render: object => renderCell(object, 'objectCell', 'spec_parameters'),
    }
];
