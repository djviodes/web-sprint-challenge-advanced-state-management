import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchData } from '../store/actions/actions';

const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

const StyledSmurfCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 12%;
    height: 20vh;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #00B5EE;
    margin: 1%;
`

const Smurfs = (props) => {
    useEffect(() => {
        props.fetchData();
    }, []);

    return (
        <div>
            {props.isLoading ? <p>Loading your favorite smurfs...</p> : null}
            {props.error ? (
                <p style={{ color: 'red' }}>You've been smurfed! {props.error}</p>
            ) : null}
            {props.smurfs.length > 0 ? (
                <StyledCardContainer>
                    {props.smurfs.map((smurf) => {
                        return (
                            <StyledSmurfCard>
                                <h2>{smurf.name}</h2>
                                <p>Age: {smurf.age}</p>
                                <p>Height: {smurf.height}</p>
                            </StyledSmurfCard>
                        );
                    })}
                </StyledCardContainer>
            ) : null}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error,
    };
};

export default connect(mapStateToProps, { fetchData })(Smurfs);