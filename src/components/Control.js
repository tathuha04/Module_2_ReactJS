import React, { Component } from 'react'
class Control extends Component {
    render() {
        return (
            <div class="card-header">
                <div class="row">
                    <div class="col-3">
                        <button type="button" class="btn btn-primary btn-icon-text">
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div class="col-6">
                        <form class="search-form" action="#">
                            <i class="icon-search"></i>
                            <input
                                type="search"
                                class="form-control"
                                placeholder="Search Here"
                                title="Search here"
                            />
                            <button class="btn btn-primary btn-icon-text">
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div class="col-3 d-flex align-items-center">
                        <select class="form-control">
                            <option value="">Sắp xếp</option>
                            <option value="">ABC def</option>
                            <option value="">ABC def</option>
                            <option value="">ABC def</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
export default Control;