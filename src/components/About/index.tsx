import * as React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { languageList } from 'components/LangSelector';

interface IAboutProps {
    isVisible: boolean;
}

class About extends React.Component<IAboutProps> {
    public render() {
        const email = 'cherebedov.sergey@gmail.com';
        const github = 'https://github.com/scherebedov/interslavic';
        const source = 'http://steen.free.fr/interslavic';
        const tableUrl = 'https://docs.google.com/spreadsheets/d/14b7B41A847_PDD6S3dFBOVBIkt_Cdxnt1m4e6NjrWP0/edit?usp=sharing';

        const authors = {
            en: 'Jan van Steenbergen',
            ru: 'Denis Shabalin, Alexandr Dubrovin',
            be: '',
            uk: 'Natasha Pekar, Yaroslav Serhieiev',
            pl: 'Jan van Steenbergen, Michał Swat',
            cs: 'Zdeněk Kučera',
            sk: '',
            bg: '',
            mk: '',
            sr: 'Ilija Petrovic',
            hr: '',
            sl: '',
        };

        return (
            <div className={'about' + (this.props.isVisible ? ' show' : '')}>
                <div className={'common'}>
                    <br/>
                    Using dictionary from <a target={'_blank'} href={source}>{source}</a>
                    <p><b>Authors of Dictionary</b></p>
                    {this.renderAuthors(authors)}
                    <hr/>
                    <p>Please join the work to improve word translations for your native language.</p>
                    <a target={'_blank'} href={tableUrl}>Table with translations</a>
                    <hr/>
                    <p>Developer:</p>
                    <a target={'_blank'} href={`email:${email}`}>Sergey Cherebedov ({email})</a>
                    <hr/>
                    Source code (Github) <a target={'_blank'} href={github}>{github}</a>
                    <hr/>
                    <button
                        type={'button'}
                        className={'btn btn-primary shadow'}
                        onClick={() => window.history.back()}
                    >
                        Go back
                    </button>
                </div>
                <div className={'devInfo'}>
                    <p className={'text-muted buildHash'}>{HASH_ID}</p>
                    <p className={'text-muted buildHash'}>{DATE}</p>
                </div>
            </div>
        );
    }
    private renderAuthors(authors) {
        return (
            <table className={'table table-sm table-striped authorsTable'}>
                <tbody>
                {Object.keys(authors).filter((lang) => Boolean(authors[lang])).map((lang, i) => {
                    const names = authors[lang];
                    return (
                        <tr key={i}>
                            <td>{languageList.find(({value}) => value === lang).name}</td>
                            <td>{names}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({page, isLoading}) {
    return {
        isVisible: page === 'about' && !isLoading,
    };
}

export default connect(mapStateToProps)(About);
