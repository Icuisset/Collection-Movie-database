import React from 'react';

import './NoResultsSection.css';


type ResultProps = {
    message: string;
    error: boolean;
  }


function NoResultsSection({message ="Too many results to show",error=false}:ResultProps): JSX.Element {

    return (
        <section className="noResultsSection">
            {error ? (<p className="noResultsMessage">Sorry, there are no results to show for this keyword.<br/>{message}</p>) : null}
        </section>
    )
  };

export default NoResultsSection;