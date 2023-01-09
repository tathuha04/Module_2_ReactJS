import React,{Component} from "react";
class ListStudent extends Component{
    render(){
        return(
            <div class="card-body">
                <h3 class="card-title">Danh sách sinh viên</h3>
                <div class="table-responsive pt-3">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>SV001</td>
                                <td>Nguyễn Văn A</td>
                                <td>20</td>
                                <td>Nam</td>
                                <td>
                                    <div class="template-demo">
                                        <button
                                            type="button"
                                            class="btn btn-danger btn-icon-text"
                                        >
                                            Xem
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-warning btn-icon-text"
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-success btn-icon-text"
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>SV002</td>
                                <td>Nguyễn Văn B</td>
                                <td>21</td>
                                <td>Nữ</td>
                                <td>
                                    <div class="template-demo">
                                        <button
                                            type="button"
                                            class="btn btn-danger btn-icon-text"
                                        >
                                            Xem
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-warning btn-icon-text"
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-success btn-icon-text"
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>SV003</td>
                                <td>Nguyễn Văn C</td>
                                <td>19</td>
                                <td>Nam</td>
                                <td>
                                    <div class="template-demo">
                                        <button
                                            type="button"
                                            class="btn btn-danger btn-icon-text"
                                        >
                                            Xem
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-warning btn-icon-text"
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-success btn-icon-text"
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListStudent;