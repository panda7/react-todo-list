import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {
    render() {
        /**
         * @done 해당 일정을 완료했는지 여부
         * @children 일정 정보 내용
         * @onToggle 일정 완료 상태 여부
         * @onRemove 해당 일정 제거
         */
        const { done, children, onToggle, onRemove } = this.props;
        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type='checkbox' checked={done} readOnly />
                <div className={cx('text', { done })}>{children}</div>
                <div className={cx('delete')} onClick={onRemove}>[지우기]</div>
            </div>
        );
    }
}

export default TodoItem;