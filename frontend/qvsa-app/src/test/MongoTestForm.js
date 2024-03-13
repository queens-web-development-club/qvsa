import React from 'react';

/**
 * The MongoTestForm is a basic HTML form (sorry for lack of CSS lol) to test adding/deleting from MongoDB.
 * @param props
 */
const MongoTestForm = (props) => {
    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default MongoTestForm;