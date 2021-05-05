import React from 'react';
import classes from './Music.module.css'

const Music = (props) => {
    return (
        <div >
            Music
            <form>
                <p><select name="music">
                    <optgroup label="Russian Music">
                        <option value="r1">"ДДТ"</option>
                        <option value="r2">"Би-2"</option>
                        <option value="r3">"КиШ"</option>
                    </optgroup>
                    <optgroup label="Ukrainian music">
                        <option value="u1">"Океан Эльзы"</option>
                        <option value="u2">"Скрябин"</option>
                        <option value="u3">"Дзидзьо"</option>
                    </optgroup>
                </select></p>
                <p><input type="submit" value="Отправить"/></p>
            </form>
        </div>
    )
}

export default Music