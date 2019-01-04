import React from 'react'

const EditPage = (props) =>{
    return(
        <div className='editForm'>
            <form>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Title</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Director</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="colFormLabel" placeholder="col-form-label"></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Year</label>
                    <div class="col-sm-6">
                        <input type="number" class="form-control" id="colFormLabel" placeholder="col-form-label"></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">My Rating</label>
                    <div class="col-sm-6">
                        <input type="number" class="form-control" id="colFormLabel" placeholder="col-form-label"></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Poster URL</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="colFormLabel" placeholder="col-form-label"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditPage