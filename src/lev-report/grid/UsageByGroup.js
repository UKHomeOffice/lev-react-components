import React from 'react';
import styled from 'styled-components';

const Scroller = styled.div`
  height: 400px;
  width: 100%;
  position: relative;
  overflow: auto;
`;
const TracksContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
const Track = styled.div`
  flex: 1 0 5em;
  
  & > div:nth-child(even) {
    background-color: #eee;
  }
  
  & > div:first-child {
    height: 50px;
    display: flex;
    position: sticky;
    top: 0;
    background-color: #ccc;
    border: solid #fff;
    border-width: 0 1px;
    z-index: 1;
    text-transform: capitalize;
  }
  
  & > div:last-child {
    display: flex;
    position: sticky;
    bottom: 0;
    background-color: #ccc;
    border: solid #fff;
    border-width: 0 1px;
    z-index: 1;
  }
  
  &.groupName {
    position: sticky;
    left: 0px;
    z-index: 2;
  }
  
  &:last-child {
    position: sticky;
    right: 0px;
    background-color: #ddd;
    border: solid #fff;
    border-width: 0 1px;
    z-index: 1;
  }
`;
const Data = styled.div`
  height: 3ex;
  display: flex;
  align-items: center;
  justify-content: ${props => props && props.group ? 'flex-start' : 'flex-end;'}
  background-color: #fff;
  padding: .5em;
  padding-left: 2em;
`;
const Heading = ({ children, ...props }) => <Data {...props}>{children}</Data>;
const Datum = ({ children, ...props }) =>
  <Data {...props}>{children ? `${children}`.replace(/\d(?=(\d{3})+$)/g, '$&,') : null}</Data>;

const UsageByGroup = ({ datasets, groups, totals, ...props }) => groups && groups.length &&
<Scroller>
  <TracksContainer parents={groups.filter(g => g.hasChildren)}>
    {groups.filter(g => g.hasChildren).map(g => <input type='checkbox' id={`parent_${g.id}`} />)}
    <Track className="groupName">
      <Heading group>Group name</Heading>
      {groups.map((group, i, gs) =>
        <Heading group className={group.parent ?
          `childOf ${group.parent}${++i < gs.length && gs[i].parent ? '' : ' lastChild'}` :
          `parent ${group.id}`}
        >
          { group.hasChildren ?
            <label for={`parent_${group.id}`}>{group.name.replace(/^\/Team |^\/\w+ - |^\//, '')}</label> :
            group.name.replace(/^\/Team |^\/\w+ - |^\//, '')
          }
        </Heading>
      )}
      <Heading>Totals</Heading>
    </Track>
    {datasets.map(dataset =>
      <Track>
        <Heading>{dataset.name}</Heading>
        {groups.map(group =>
          <Datum className={group.parent ? `childOf ${group.parent}` : null}>
            {group[dataset.name]}
          </Datum>
        )}
        <Datum>{totals[dataset.name]}</Datum>
      </Track>
    )}
    <Track>
      <Heading>Group total</Heading>
      {groups.map(group =>
        <Datum className={group.parent ? `childOf ${group.parent}` : null}>{group.total}</Datum>
      )}
      <Datum>{totals.total}</Datum>
    </Track>
  </TracksContainer>
</Scroller> || null;

export default UsageByGroup;
