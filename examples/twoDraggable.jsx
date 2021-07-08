/* eslint-disable no-console, react/no-access-state-in-setstate */
import React ,{useState,useRef}from 'react';
import { gData } from './utils/dataUtil';
import './draggable.less';
import '../assets/index.less';
import createReactContext, { Context } from '@ant-design/create-react-context';
import Tree, { TreeNode } from '../src';

class Demo extends React.Component {
  state = {
    gData,
    autoExpandParent: true,
    expandedKeys: ['0-0-key', '0-0-0-key', '0-0-0-0-key'],
  };

  onDragStart = (info) => {
    this.props.listenStart()
    console.log('start', info);
  };

  onDragEnter = (info) => {
    console.log('enter', info);
    console.log(this.props.keyName,this.props.outSider.current)

    // return 
    this.setState({
      expandedKeys: info.expandedKeys,
    });
  };

  onDrop = (info) => {
    console.log('drop', info);
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    if(this.props.outSider.current !== this.props.keyName){
      return 
    }
    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          callback(item, index, arr);
          return;
        }
        if (item.children) {
          loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.state.gData];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.unshift(dragObj);
      });
    } else {
      // Drop on the gap
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }

    this.setState({
      gData: data,
    });
  };

  onExpand = (expandedKeys) => {
    console.log('onExpand', expandedKeys);
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  render() {
    console.log(this.props.outSider,'props outsider')
    const loop = (data) =>
      data.map((item) => {
        if (item.children && item.children.length) {
          return (
            <TreeNode key={item.key} title={item.title}>
              {loop(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode key={item.key} title={item.title} />;
      });
    return (
      <div className="draggable-demo">
        <h2>draggable</h2>
        <p>drag a node into another node</p>
        <div className="draggable-container">
          <Tree
            expandedKeys={this.state.expandedKeys}
            onExpand={this.onExpand}
            autoExpandParent={this.state.autoExpandParent}
            draggable
            onDragStart={this.onDragStart}
            onDragEnter={this.onDragEnter}
            onDrop={this.onDrop}
            isOutsider={this.props.outSider.current !== this.props.keyName}
            allowOutsider
          >
            {loop(this.state.gData)}
          </Tree>
        </div>
      </div>
    );
  }
}

function Index() {
  const dragRef = useRef(0)
  const [dragName,setDragName] = useState(0)
  return (
    <div>
      <div style={{ marginRight: 20 }}>
        <Demo outSider={dragRef} keyName={1} listenStart = {()=>{
          dragRef.current = 1
          setDragName(1) // 触发一下更新
        }}/>
      </div>
      <Demo outSider={dragRef} keyName={2} listenStart={ ()=>{dragRef.current = 2
          setDragName(2) // 触发一下更新
      }
    }  />
    </div>
  );
}
export default Index;
