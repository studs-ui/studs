import React from 'react';
import DesignGuideTable from '../DesignGuideTable/DesignGuideTable';
import BorderTable from '../ObjectStyles/component/border';

export default function BorderTableAll(props): JSX.Element {
  const { datas } = props;

  const data = {
    columns: [
      {
        title: 'Token',
        styles: {
          fontWeight: 600,
          width: 179,
          background: '#F4F4F4',
          color: "black"
        },
      },
      {
        title: 'Role',
        styles: {
          fontWeight: 600,
          width: 209,
          background: '#F4F4F4',
          color: "black"
        },
      },
      {
        title: 'Value',
        styles: {
          fontWeight: 600,
          width: 343,
          background: '#F4F4F4',
          color: "black"
        },
      },
      {
        title: '',
        styles: {
          width: 79,
          background: '#F4F4F4'
        },
      },
    ],
    rows: [
      [
        {
          content: (
            <span
              style={{
                border: '1px solid #E0E0E0',
                borderRadius: '3px',
                background: '#E0E0E0',
                padding: '4px 8px',
              }}
            >
              border-default
            </span>
          ),
        },
        {
          content: 'Inner Border All',
        },
        {
          content: (
            <div>
              <span>gray-20</span>
              <br></br>
              <span
                style={{
                  border: '1px solid #E0E0E0',
                  borderRadius: '3px',
                  background: '#E0E0E0',
                  padding: '4px 8px',
                }}
              >
                X:0 Y:0 B:0 S:1 #e0e0e0
              </span>
            </div>
          ),
        },
        {
          content: (
            <div
              style={{
                width: 48,
                height: 48,
                backgroundColor: '#F4F4F4',
                boxShadow: '0px 0px 0px 1px #E0E0E0 inset',
              }}
            ></div>
          ),
        },
      ],
      [
        {
          content: (
            <span
              style={{
                border: '1px solid #E0E0E0',
                borderRadius: '3px',
                background: '#E0E0E0',
                padding: '4px 8px',
              }}
            >
              border-hc
            </span>
          ),
        },
        {
          content: (
            <div>
              <span>Inner</span>
              <br></br>
              <span>Border all: Contrast</span>
            </div>
          ),
        },
        {
          content: (
            <div>
              <span>gray-20</span>
              <br></br>
              <span
                style={{
                  border: '1px solid #E0E0E0',
                  borderRadius: '3px',
                  background: '#E0E0E0',
                  padding: '4px 8px',
                }}
              >
                X:0 Y:0 B:0 S:1 #e0e0e0
              </span>
            </div>
          ),
        },
        {
          content: (
            <div
              style={{
                width: 48,
                height: 48,
                backgroundColor: '#F4F4F4',
                boxShadow: '0px 0px 0px 1px #8D8D8D inset',
              }}
            ></div>
          ),
        },
      ],
      [
        {
          content: (
            <span
              style={{
                border: '1px solid #E0E0E0',
                borderRadius: '3px',
                background: '#E0E0E0',
                padding: '4px 8px',
              }}
            >
              border-focus
            </span>
          ),
        },
        {
          content: (
            <div>
              <span>Inner</span>
              <br></br>
              <span>Border all: Focus</span>
            </div>
          ),
        },
        {
          content: (
            <div>
              <span>Blue 60</span>
              <br></br>
              <span
                style={{
                  border: '1px solid #E0E0E0',
                  borderRadius: '3px',
                  background: '#E0E0E0',
                  padding: '4px 8px',
                }}
              >
                X:0 Y:0 B:0 S:2 #0f62fe
              </span>
            </div>
          ),
        },
        {
          content: (
            <div
              style={{
                width: 48,
                height: 48,
                backgroundColor: '#F4F4F4',
                boxShadow: '0px 0px 0px 2px #0F62FE inset',
              }}
            ></div>
          ),
        },
      ],
      [
        {
          content: (
            <span
              style={{
                border: '1px solid #E0E0E0',
                borderRadius: '3px',
                background: '#E0E0E0',
                padding: '4px 8px',
              }}
            >
              border-selected
            </span>
          ),
        },
        {
          content: (
            <div>
              <span>Inner</span>
              <br></br>
              <span>Border all: Focus</span>
            </div>
          ),
        },
        {
          content: (
            <div>
              <span>Blue 60</span>
              <br></br>
              <span
                style={{
                  border: '1px solid #E0E0E0',
                  borderRadius: '3px',
                  background: '#E0E0E0',
                  padding: '4px 8px',
                }}
              >
                X:0 Y:0 B:0 S:2 #0f62fe
              </span>
            </div>
          ),
        },
        {
          content: (
            <div
              style={{
                width: 48,
                height: 48,
                backgroundColor: '#F4F4F4',
                boxShadow: '0px 0px 0px 3px #0F62FE inset',
              }}
            ></div>
          ),
        },
      ],
      [
        {
          content: (
            <span
              style={{
                border: '1px solid #E0E0E0',
                borderRadius: '3px',
                background: '#E0E0E0',
                padding: '4px 8px',
              }}
            >
              border-error
            </span>
          ),
        },
        {
          content: (
            <div>
              <span>Inner</span>
              <br></br>
              <span>Border all: Focus</span>
            </div>
          ),
        },
        {
          content: (
            <div>
              <span>Red 60</span>
              <br></br>
              <span
                style={{
                  border: '1px solid #E0E0E0',
                  borderRadius: '3px',
                  background: '#E0E0E0',
                  padding: '4px 8px',
                }}
              >
                X:0 Y:0 B:0 S:2 #da1e28
              </span>
            </div>
          ),
        },
        {
          content: (
            <div
              style={{
                width: 48,
                height: 48,
                backgroundColor: '#F4F4F4',
                boxShadow: '0px 0px 0px 2px #DA1E28 inset',
              }}
            ></div>
          ),
        },
      ],
    ],
  };

  return <>
  <span>In STUDS, border width is primarily used to outline the frame of a component or to structure content. The border width remains the same for desktop scale and mobile scale.</span>
  <BorderTable/>
  <DesignGuideTable data={data} isWhiteRow />
  </>;
}
