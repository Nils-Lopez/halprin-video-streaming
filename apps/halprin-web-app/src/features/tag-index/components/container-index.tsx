import { FC } from 'react';
import * as S from './container-index.style';

type Props = {
  selectedTag: string;
  setSelectedTag: any;
};

export const ContainerIndex: FC<Props> = (props) => {
  const tags = ['Agfg', 'brg', 'bgf', 'bgfgfs', 'grfwsg', 'trfdsg'];

  const { selectedTag, setSelectedTag } = props;

  return (
    <S.Ctn>
      {/* index: {tags.map(tag => {return <span key={'tag-' + tag.toLowerCase()} className={tag === selectedTag ? 'tag selected' : 'tag'} onClick={() => setSelectedTag(tag)}>{tag}</span>})} */}
      <h3>A</h3>
      <table>
        <tr>
          <td
            key={'tag-' + 'ages'}
            className={'ages' === selectedTag ? 'tag selected' : 'tag'}>
            <button onClick={() => setSelectedTag('ages')}>ages</button>
          </td>
          <td>RDG</td>
          <td>GDF</td>
        </tr>
        <tr>
          <td>QLFKS</td>
          <td>SLDK</td>
          <td>ZPFK</td>
        </tr>
        <tr>
          <td>NVSL</td>
          <td>UIEE</td>
          <td>WKOEl</td>
        </tr>
      </table>
      <h3>B</h3>
      <table>
        <tr>
          <td>DFF</td>
          <td>RDG</td>
          <td>GDF</td>
        </tr>
        <tr>
          <td>QLFKS</td>
          <td>SLDK</td>
          <td>ZPFK</td>
        </tr>
        <tr>
          <td>NVSL</td>
          <td>UIEE</td>
          <td>WKOEl</td>
        </tr>
        <tr>
          <td>QLFKS</td>
          <td>SLDK</td>
          <td>ZPFK</td>
        </tr>
        <tr>
          <td>NVSL</td>
          <td>UIEE</td>
          <td>WKOEl</td>
        </tr>
      </table>
      <h3>C</h3>
      <table>
        <tr>
          <td>DFF</td>
          <td>RDG</td>
          <td>GDF</td>
        </tr>
        <tr>
          <td>QLFKS</td>
          <td>SLDK</td>
          <td>ZPFK</td>
        </tr>
        <tr>
          <td>NVSL</td>
          <td>UIEE</td>
          <td>WKOEl</td>
        </tr>
      </table>
    </S.Ctn>
  );
};
