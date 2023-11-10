import React from 'react';
import Button from './Button/Button';
import Preview from './Preview/Preview';

interface Props {
    inverse: boolean
    buttonText?: string
}

const HorizontalBlock = (props: Props) => {
    return (
        <div>

        {
            props.inverse ? (
        <div>
                
                <Preview />
                {props.buttonText && <Button>Children</Button>}
        </div>

            ) : (
        <div>

                {props.buttonText && <Button>Children</Button>}
                <Preview />


        </div>

            )
        }
        </div>

    )
}

export default HorizontalBlock;